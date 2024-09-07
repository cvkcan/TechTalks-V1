import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Luv2ShopFormServiceService } from '../../services/luv2-shop-form-service.service';
import { Country } from '../../common/country';
import { State } from '../../common/state';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit{
  
  checkoutFormGroup!: FormGroup;
  totalPrice: number = 0;
  totalQuantity: number = 0;

  creditCardYears: number[] = [];
  creditCardMonths: number[] = [];

  countries: Country[] = [];
  
  shippingAddressStates: State[] = [];
  billingAddressStates: State[] = [];


  constructor(private formBuilder: FormBuilder,
              private luv2ShopFormService: Luv2ShopFormServiceService
  ){

  }
  
  ngOnInit(): void {
    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: [""],
        lastName: [""],
        email: [""]
      }),
      shippingAddress: this.formBuilder.group({
        street: [""],
        city: [""],
        state: [""],
        country: [""],
        zipCode: [""]
      }),
      billingAddress: this.formBuilder.group({
        street: [""],
        city: [""],
        state: [""],
        country: [""],
        zipCode: [""]
      }),
      creditCard: this.formBuilder.group({
        cardType: [""],
        nameOnCard: [""],
        cardNumber: [""],
        securityCode: [""],
        expirationMonth: [""],
        expirationYear: [""]
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

  handleMonthsAndYears(){
    const creditCardFormGroup = this.checkoutFormGroup.get("creditCard");
    const currentYear: number = new Date().getFullYear();
    const selectedYear: number = creditCardFormGroup!.value.expirationYear;
    let startMonth: number;
    if(currentYear == selectedYear){
      startMonth = new Date().getMonth() + 1;
    }else {
      startMonth = 1;
    }

    this.luv2ShopFormService.getCreditCardMonths(startMonth).subscribe(
      d => {
        this.creditCardMonths = d;
      }
    );
  }

  getStates(formGroupName: string){
    const formGroup = this.checkoutFormGroup.get(formGroupName);
    const countryCode = formGroup?.value.country.code;
    const countryName = formGroup?.value.country.name;

    console.log("CountryCode and Name: " + countryCode + " " + countryName);

    this.luv2ShopFormService.getStates(countryCode).subscribe(
      d => {
        if(formGroupName == 'shippingAddress'){
          this.shippingAddressStates = d;
        } else {
          this.billingAddressStates = d;
        }

        formGroup?.get('state')?.setValue(d[0]);
      }
    );
  }

  onSubmit(){
    console.log("Handling button");
    console.log(this.checkoutFormGroup.get('customer')!.value);
    console.log(this.checkoutFormGroup.get('customer')!.value.email);
    console.log("***");
    console.log(this.checkoutFormGroup.get('shippingAddress')!.value.country.name);
    console.log(this.checkoutFormGroup.get('shippingAddress')!.value.state.name);

  }

  copyShippingAddressToBillingAddress(event: any){
    if(event.target.checked){
      this.checkoutFormGroup.controls["billingAddress"]
        .setValue(this.checkoutFormGroup.controls["shippingAddress"].value);
      
      //bug fix for states
      this.billingAddressStates = this.shippingAddressStates;
    }
    else {
      this.checkoutFormGroup.controls["billingAddress"].reset();

      // bug fix for states

      this.billingAddressStates = [];
    }
  }

}
