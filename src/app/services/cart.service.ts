import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { PaymentService } from './payment.service'


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Product[] = [];

  constructor(private paymentService: PaymentService) { }

  getCart() {
    return this.cart;
  }

  addCartItem(product: Product) {
    this.cart.push(product);
    this.paymentService.updateQuantity(product);
  }

  removeCartItem(product: Product) {
    this.cart.splice(this.cart.findIndex(p => p.title === product.title), 1);
    this.paymentService.removeCartQuantity(product)
  }

  findCartItem(product: Product): boolean {
    const item = this.cart.find(p => p.title === product.title);
    if (item === undefined) {
      return false;
    }
    return true;
  }

}
