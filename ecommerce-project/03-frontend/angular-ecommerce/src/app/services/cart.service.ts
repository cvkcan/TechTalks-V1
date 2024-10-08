import { Injectable } from '@angular/core';
import { CartItem } from '../common/cart-item';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];
  totalPrice: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  totalQuantity: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  storage: Storage = localStorage;

  constructor() { 
    let data = JSON.parse(this.storage.getItem('cartItems')!);
    if(data != null){
      this.cartItems = data;
      this.computeCartTotals();
    }
  }

  addToCart(theCartItem: CartItem){
    let alreadyExistingInCart: boolean = false;
    let existingCartItem: CartItem | undefined = undefined;
    if(this.cartItems.length > 0){
      // for (let tempCartItem of this.cartItems){
      //   if(tempCartItem.id == theCartItem.id){
      //     existingCartItem = tempCartItem;
      //     break;
      //   }
      // }
      
      existingCartItem = this.cartItems.find(tCartItem => tCartItem.id == theCartItem.id);

      alreadyExistingInCart = (existingCartItem != undefined);
    }

    if (alreadyExistingInCart){
      existingCartItem!.quantity++;
    }else {
      this.cartItems.push(theCartItem);
    }

    this.computeCartTotals();
  }

  decrementQuantity(theCartItem: CartItem){
    theCartItem.quantity--;
    if(theCartItem.quantity == 0){
      this.remove(theCartItem);
    }else {
      this.computeCartTotals();
    }
  }

  remove(theCartItem: CartItem){
    const itemIndex = this.cartItems.findIndex(tCart => tCart.id === theCartItem.id);
    if (itemIndex > -1){
      this.cartItems.splice(itemIndex,1);
      this.computeCartTotals();
    }
  }

  computeCartTotals() {
    let totalPriceValue : number = 0;
    let totalQuantity : number = 0;
    for(let currenctCarItem of this.cartItems){
      totalPriceValue+= currenctCarItem.quantity * currenctCarItem.unitPrice;
      totalQuantity+= currenctCarItem.quantity;
    }
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantity);

    this.logCartData(totalPriceValue, totalQuantity);
    this.persistCartItems();
  }

  logCartData(totalPriceValue: number, totalQuantityValue: number){
    console.log("Contents of the cart");
    for(let tempCartItem of this.cartItems){
      const subTotalPrice = tempCartItem.quantity * tempCartItem.unitPrice;
      console.log("name= " + tempCartItem.name + " quantity= " + tempCartItem.quantity + " unitprice= " + tempCartItem.unitPrice + " subtotalprice= " + subTotalPrice);
    }
    console.log("totalPrice: " + totalPriceValue.toFixed(2) + "quantity: " + totalQuantityValue);
    console.log("----");
  }

  persistCartItems() {
    this.storage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
}
