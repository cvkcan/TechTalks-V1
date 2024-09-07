import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../common/cart-item';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrl: './cart-details.component.css'
})
export class CartDetailsComponent implements OnInit {

  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;
  
  constructor(private cartService : CartService){

  }

  ngOnInit(): void {
    this.listCartDetails();
  }

  listCartDetails(){
    this.cartItems = this.cartService.cartItems;
    this.cartService.totalPrice.subscribe(
      d => {
        this.totalPrice = d;
      }
    )
    this.cartService.totalQuantity.subscribe(
      d => {
        this.totalQuantity = d;
      }
    )
  }

  incrementQuantity(theCartItem: CartItem){
    this.cartService.addToCart(theCartItem);
  }

  decrementQuantity(theCartItem: CartItem){
    this.cartService.decrementQuantity(theCartItem);
  }

  remove(theCartItem: CartItem){
    this.cartService.remove(theCartItem);
  }

}
