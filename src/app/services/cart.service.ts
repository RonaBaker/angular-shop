import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { PaymentService } from './payment.service'
import { LoginService } from './login.service';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartUser : {user: string, cart: Product[]}[] = [];

  constructor(private paymentService: PaymentService, private loginService: LoginService, private dataService: DataService) { }

  initCart() {
    const userCart = this.cartUser.find(u => u.user === this.loginService.activeUser);
    if (userCart === undefined) { // First time, initialize cart
      this.cartUser.push({user: this.loginService.activeUser, cart: []})
    }
  }

  getCart() {
    this.initCart();
    this.checkUpdates();
    return this.cartUser.find(u => u.user === this.loginService.activeUser).cart;
  }

  addCartItem(product: Product) {
    const user = this.cartUser.find(u => u.user === this.loginService.activeUser);
    user.cart.push(product);
    this.paymentService.updateQuantity(product);
  }

  removeCartItem(product: Product) {
    const user = this.cartUser.find(u => u.user === this.loginService.activeUser);
    user.cart.splice(user.cart.findIndex(p => p.title === product.title), 1);
    this.paymentService.removeCartQuantity(product)
  }

  findCartItem(product: Product): boolean {
    if (this.cartUser.find(u => u.user === this.loginService.activeUser) === undefined) {
      this.initCart();
    }
    const user = this.cartUser.find(u => u.user === this.loginService.activeUser);
    const item = user.cart.find(p => p.title === product.title);
    if (item === undefined) {
      return false;
    }
    return true;
  }
  
  checkUpdates() {
    let cart = this.cartUser.find(u => u.user === this.loginService.activeUser).cart;
    let products = this.dataService.getProducts();
    for(let i = 0; i < cart.length; i++) { 
      const product = products.find(p => p.title === cart[i].title);
      cart[i] = product;
    }
    
  }


}
