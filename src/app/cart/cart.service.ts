import { Injectable } from '@angular/core';
import { Product } from '../core/model/product';
import { PaymentService } from './payment.service'
import { DataService } from '../services/data.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, filter, map, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cart = new BehaviorSubject<Product[]>([]);
  private cart = this._cart.asObservable();

  constructor(private paymentService: PaymentService) {
  }

  getCart() {
    return this.cart;
  }

  updateCart(product: Product) {
    let productIndex = this._cart.value.findIndex(p => p.id === product.id);
    this._cart.value.splice(productIndex, 1, product); // update existing product
    this.paymentService.updateChanges(product)
    this._cart.next(this._cart.value);

  }

  addCartItem(product: Product) {
    this._cart.value.push(product);
    this.paymentService.updateQuantity(product);
    this._cart.next(this._cart.value);
  }

  removeCartItem(product: Product) {
    this._cart.value.splice(this._cart.value.findIndex(p => p.id === product.id), 1);
    this.paymentService.removeCartQuantity(product);
    this._cart.next(this._cart.value);
  }

  findCartItem(product: Product): boolean {
    const item = this._cart.value.find(p => p.id === product.id);
    if (item === undefined) {
      return false;
    }
    return true;
  }
}
