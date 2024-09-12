import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Luv2ShopFormServiceService } from '../../services/luv2-shop-form-service.service';
import { Country } from '../../common/country';
import { State } from '../../common/state';
import { Luv2ShopValidators } from '../../validators/luv2-shop-validators';
import { CartService } from '../../services/cart.service';
import { CheckoutService } from '../../services/checkout.service';
import { Router } from '@angular/router';
import { Order } from '../../common/order';
import { OrderItem } from '../../common/order-item';
import { Purchase } from '../../common/purchase';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {

  checkoutFormGroup!: FormGroup;
  totalPrice: number = 0;
  totalQuantity: number = 0;

  creditCardYears: number[] = [];
  creditCardMonths: number[] = [];

  countries: Country[] = [];

  shippingAddressStates: State[] = [];
  billingAddressStates: State[] = [];

  storage : Storage = sessionStorage;


  constructor(private formBuilder: FormBuilder,
              private luv2ShopFormService: Luv2ShopFormServiceService,
              private cartService: CartService,
              private checkoutService: CheckoutService,
              private router: Router
              
  ) {

  }

  ngOnInit(): void {
    const pattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

    this.reviewCartDetails();

    const theEmail = this.storage.getItem('userEmail');

    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: new FormControl('', [Validators.required,
        Validators.minLength(2),
        Luv2ShopValidators.notOnlyWhiteSpace]),
        lastName: new FormControl('', [Validators.required,
        Validators.minLength(2),
        Luv2ShopValidators.notOnlyWhiteSpace]),
        email: new FormControl(theEmail, [Validators.required,
        Validators.pattern(pattern)]
        )
      }),
      shippingAddress: this.formBuilder.group({
        street: new FormControl('', [Validators.required,
        Validators.minLength(2),
        Luv2ShopValidators.notOnlyWhiteSpace]),
        city: new FormControl('', [Validators.required,
        Validators.minLength(2),
        Luv2ShopValidators.notOnlyWhiteSpace]),
        state: new FormControl('', [Validators.required]),
        country: new FormControl('', [Validators.required]),
        zipCode: new FormControl('', [Validators.required,
        Validators.minLength(2),
        Luv2ShopValidators.notOnlyWhiteSpace])
      }),
      billingAddress: this.formBuilder.group({
        street: new FormControl('', [Validators.required,
        Validators.minLength(2),
        Luv2ShopValidators.notOnlyWhiteSpace]),
        city: new FormControl('', [Validators.required,
        Validators.minLength(2),
        Luv2ShopValidators.notOnlyWhiteSpace]),
        state: new FormControl('', [Validators.required]),
        country: new FormControl('', [Validators.required]),
        zipCode: new FormControl('', [Validators.required,
        Validators.minLength(2),
        Luv2ShopValidators.notOnlyWhiteSpace])
      }),
      creditCard: this.formBuilder.group({
        cardType: new FormControl('',[Validators.required]),
        nameOnCard: new FormControl('', [Validators.required,
          Validators.minLength(2),
          Luv2ShopValidators.notOnlyWhiteSpace]),
        cardNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]{16}')]),
        securityCode: new FormControl('', [Validators.required, Validators.pattern('[0-9]{3}')]),
        expirationMonth: [''],
        expirationYear: ['']
      }),

    });

    const startMonth: number = new Date().getMonth() + 1;
    console.log("start month: " + startMonth);

    this.luv2ShopFormService.getCreditCardMonths(startMonth).subscribe(
      d => {
        console.log("Months: " + JSON.stringify(d));
        this.creditCardMonths = d;
      }
    );

    this.luv2ShopFormService.getCreditCardYears().subscribe(
      d => {
        console.log("Years: " + JSON.stringify(d));
        this.creditCardYears = d;
      }
    );

    this.luv2ShopFormService.getCountries().subscribe(
      d => {
        console.log("Retrived countries: " + JSON.stringify(d));
        this.countries = d
      }
    );
  }

  handleMonthsAndYears() {
    const creditCardFormGroup = this.checkoutFormGroup.get("creditCard");
    const currentYear: number = new Date().getFullYear();
    const selectedYear: number = creditCardFormGroup!.value.expirationYear;
    let startMonth: number;
    if (currentYear == selectedYear) {
      startMonth = new Date().getMonth() + 1;
    } else {
      startMonth = 1;
    }

    this.luv2ShopFormService.getCreditCardMonths(startMonth).subscribe(
      d => {
        this.creditCardMonths = d;
      }
    );
  }

  getStates(formGroupName: string) {
    const formGroup = this.checkoutFormGroup.get(formGroupName);
    const countryCode = formGroup?.value.country.code;
    const countryName = formGroup?.value.country.name;

    console.log("CountryCode and Name: " + countryCode + " " + countryName);

    this.luv2ShopFormService.getStates(countryCode).subscribe(
      d => {
        if (formGroupName == 'shippingAddress') {
          this.shippingAddressStates = d;
        } else {
          this.billingAddressStates = d;
        }

        formGroup?.get('state')?.setValue(d[0]);
      }
    );
  }

  onSubmit() {
    console.log("Handling button");

    if (this.checkoutFormGroup.invalid) {
      this.checkoutFormGroup.markAllAsTouched();
      return;
    }

    // set up order
    let order = new Order();
    order.totalPrice = this.totalPrice;
    order.totalQuantity = this.totalQuantity;
    // get cart items
    const cartItems = this.cartService.cartItems;
    // create orderItems from cartItems
    // - Long way

    // let orderItems : OrderItem[] = [];
    // for(let i = 0; i < cartItems.length; i++){
    //   orderItems[i] = new OrderItem(cartItems[i]);
    // }

    // - Short way
    let orderItems : OrderItem[] = cartItems.map(c => new OrderItem(c));

    // set up purchase
    let purchase = new Purchase();

    // populate purchase - customer
    purchase.customer = this.checkoutFormGroup.controls['customer'].value;
    // populate purchase - shippingADdress
    purchase.shippingAddress = this.checkoutFormGroup.controls['shippingAddress'].value;
    const shippingState: State = JSON.parse(JSON.stringify(purchase.shippingAddress.state));
    const shippingCountry: Country = JSON.parse(JSON.stringify(purchase.shippingAddress.country));
    purchase.shippingAddress.state = shippingState.name;
    purchase.shippingAddress.country = shippingCountry.name;
    // populate purchase - billingAddress
    purchase.billingAddress = this.checkoutFormGroup.controls['billingAddress'].value;
    const billingState: State = JSON.parse(JSON.stringify(purchase.billingAddress.state));
    const billingCountry: Country = JSON.parse(JSON.stringify(purchase.billingAddress.country));
    purchase.billingAddress.state = billingState.name;
    purchase.billingAddress.country = billingCountry.name;
    // populate purchase - order and orderItems
    purchase.order = order;
    purchase.orderItems = orderItems;
    // call RESTAPI via the CheckoutService
    this.checkoutService.placeOrder(purchase).subscribe(
      {
        next: r => {
          alert(`Your order has been received. Order Tracking Number: ${r.orderTrackingNumber}`);
          this.resetCart();
        },
        error: ex => {
          alert("There was an error: " + ex.message);
        }
      }
    );
  }

  resetCart() {
    this.cartService.cartItems = [];
    this.cartService.totalPrice.next(0);
    this.cartService.totalQuantity.next(0);
    this.checkoutFormGroup.reset();
    this.router.navigateByUrl("/products");
  }

  copyShippingAddressToBillingAddress(event: any) {
    if (event.target.checked) {
      this.checkoutFormGroup.controls['billingAddress']
        .setValue(this.checkoutFormGroup.controls['shippingAddress'].value);

      //bug fix for states
      this.billingAddressStates = this.shippingAddressStates;
    }
    else {
      this.checkoutFormGroup.controls['billingAddress'].reset();

      // bug fix for states

      this.billingAddressStates = [];
    }
  }

  reviewCartDetails(){
    this.cartService.totalQuantity.subscribe(
      q => this.totalQuantity = q
    );

    this.cartService.totalPrice.subscribe(
      p => this.totalPrice = p
    );
  }

  get firstName() { return this.checkoutFormGroup.get('customer.firstName'); }
  get lastName() { return this.checkoutFormGroup.get('customer.lastName'); }
  get email() { return this.checkoutFormGroup.get('customer.email'); }

  get shippingAddressStreet() { return this.checkoutFormGroup.get('shippingAddress.street'); }
  get shippingAddressCity() { return this.checkoutFormGroup.get("shippingAddress.city"); }
  get shippingAddressState() { return this.checkoutFormGroup.get("shippingAddress.state"); }
  get shippingAddressZipCode() { return this.checkoutFormGroup.get("shippingAddress.zipCode"); }
  get shippingAddressCountry() { return this.checkoutFormGroup.get("shippingAddress.country"); }

  get billingAddressStreet() { return this.checkoutFormGroup.get("billingAddress.street"); }
  get billingAddressCity() { return this.checkoutFormGroup.get("billingAddress.city"); }
  get billingAddressState() { return this.checkoutFormGroup.get("billingAddress.state"); }
  get billingAddressZipCode() { return this.checkoutFormGroup.get('billingAddress.zipCode'); }
  get billingAddressCountry() { return this.checkoutFormGroup.get("billingAddress.country"); }

  get creditCardType() { return this.checkoutFormGroup.get("creditCard.cardType"); }
  get creditCardNameOnCard() { return this.checkoutFormGroup.get("creditCard.nameOnCard"); }
  get creditCardNumber() { return this.checkoutFormGroup.get("creditCard.cardNumber"); }
  get creditCardSecurityCode() { return this.checkoutFormGroup.get("creditCard.securityCode"); }

}
