import { Injectable } from '@angular/core';
import { Payment } from '../model/product-quantity';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  cartQuantity: Payment[] = [];
  CountItems = 0;
  constructor() { }

  updateQuantity(product: Product) {
    let item: Payment = { title: product.title, quantity: 1, price: product.price};
    this.cartQuantity.push(item);
    this.CountItems++;
  }

  removeCartQuantity(product: Product) {
    const item = this.cartQuantity.find(p => p.title === product.title);
    this.CountItems -= item.quantity;
    this.cartQuantity.splice(this.cartQuantity.findIndex(p => p.title === product.title), 1);
  }

  addQuantity(product: Product) {
    const itemIndex = this.cartQuantity.findIndex(p => p.title === product.title);
    this.cartQuantity[itemIndex].quantity++;
    this.CountItems++;
  }

  removeQuantity(product: Product) {
    const itemIndex = this.cartQuantity.findIndex(p => p.title === product.title);
    if(this.cartQuantity[itemIndex].quantity != 1){
      this.cartQuantity[itemIndex].quantity--;
      this.CountItems--;
    }
  }

  getProductQuantity(product: Product) {
    const itemIndex = this.cartQuantity.findIndex(p => p.title === product.title);
    return this.cartQuantity[itemIndex].quantity;
  }

  getProductTotalPrice(productTitle: string) {
    const itemIndex = this.cartQuantity.findIndex(p => p.title === productTitle);
    const quantity = this.cartQuantity[itemIndex].quantity;
    const price = this.cartQuantity[itemIndex].price;
    return quantity*price;
  }

  getTotalPayment() {
    let totalPayment = 0;
    for(let item of this.cartQuantity) {
      totalPayment += this.getProductTotalPrice(item.title);
    }
    return totalPayment
  }

}
