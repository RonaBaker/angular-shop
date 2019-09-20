import { Injectable } from '@angular/core';
import { Payment } from '../model/product-quantity';
import { Product } from '../model/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private cartQuantity: Payment[]
  private _countItems =  new BehaviorSubject<number>(0);
  public countItems = this._countItems.asObservable();
  private noItems = 0;

  constructor() {
      this.cartQuantity = [];
  }

  updateQuantity(product: Product) {
    let item: Payment = { product: product, quantity: 1};
    this.cartQuantity.push(item);
    this.noItems++;
    this.emitChanges();
  }

  private emitChanges() {
    this._countItems.next(this.noItems);
  }

  removeCartQuantity(product: Product) {
    const item = this.cartQuantity.find(p => p.product.id === product.id);
    this.noItems -= item.quantity;
    this.emitChanges();
    this.cartQuantity.splice(this.cartQuantity.findIndex(p => p.product.title === product.title), 1);
  }

  addQuantity(product: Product) {
    const itemIndex = this.cartQuantity.findIndex(p => p.product.id === product.id);
    this.cartQuantity[itemIndex].quantity++;
    this.noItems++;
    this.emitChanges();
  }

  removeQuantity(product: Product) {
    const itemIndex = this.cartQuantity.findIndex(p => p.product.id === product.id);
    if(this.cartQuantity[itemIndex].quantity != 1){
      this.cartQuantity[itemIndex].quantity--;
      this.noItems--;
      this.emitChanges();
    }
  }

  getProductQuantity(product: Product) {
    const itemIndex = this.cartQuantity.findIndex(p => p.product.id === product.id);
    return this.cartQuantity[itemIndex].quantity;
  }

  getProductTotalPrice(productId: string) {
    const itemIndex = this.cartQuantity.findIndex(p => p.product.id === productId);
    const quantity = this.cartQuantity[itemIndex].quantity;
    const price = this.cartQuantity[itemIndex].product.price;
    return quantity*price;
  }

  getTotalPayment() {
    let totalPayment = 0;
    for(let item of this.cartQuantity) {
      totalPayment += this.getProductTotalPrice(item.product.id);
    }
    return totalPayment;
  }

  updateChanges(product: Product) {
      const index = this.cartQuantity.findIndex(p => p.product.id === product.id);
      this.cartQuantity[index].product = product;
  }

  getNumCartItems() {
    return this.noItems;
  }
}
