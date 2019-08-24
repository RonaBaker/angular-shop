import { Injectable } from '@angular/core';
import { Payment } from '../model/product-quantity';
import { Product } from '../model/product';
import { LoginService } from './login.service';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  cartUserQuantity : {user: string, cartQuantity: Payment[], countItems: number}[] = [];

  constructor(private loginService: LoginService, private dataService: DataService) {
    for (let u of loginService.getUsers()) {
      this.cartUserQuantity.push({user: u.username, cartQuantity: [], countItems: 0 });
    }
  }

  updateQuantity(product: Product) {
    let item: Payment = { product: product, quantity: 1};
    let user = this.cartUserQuantity.find( u => u.user === this.loginService.activeUser );
    user.cartQuantity.push(item);
    user.countItems++;
  }

  removeCartQuantity(product: Product) {
    let user = this.cartUserQuantity.find( u => u.user === this.loginService.activeUser );
    const item = user.cartQuantity.find(p => p.product.title === product.title);
    user.countItems -= item.quantity;
    user.cartQuantity.splice(user.cartQuantity.findIndex(p => p.product.title === product.title), 1);
  }

  addQuantity(product: Product) {
    let user = this.cartUserQuantity.find( u => u.user === this.loginService.activeUser );
    const itemIndex = user.cartQuantity.findIndex(p => p.product.title === product.title);
    user.cartQuantity[itemIndex].quantity++;
    user.countItems++;
  }

  removeQuantity(product: Product) {
    let user = this.cartUserQuantity.find( u => u.user === this.loginService.activeUser );
    const itemIndex = user.cartQuantity.findIndex(p => p.product.title === product.title);
    if(user.cartQuantity[itemIndex].quantity != 1){
      user.cartQuantity[itemIndex].quantity--;
      user.countItems--;
    }
  }

  getProductQuantity(product: Product) {
    let user = this.cartUserQuantity.find( u => u.user === this.loginService.activeUser );
    const itemIndex = user.cartQuantity.findIndex(p => p.product.title === product.title);
    return user.cartQuantity[itemIndex].quantity;
  }

  getProductTotalPrice(productTitle: string) {
    let user = this.cartUserQuantity.find( u => u.user === this.loginService.activeUser );
    this.checkUpdates();
    const itemIndex = user.cartQuantity.findIndex(p => p.product.title === productTitle);
    const quantity = user.cartQuantity[itemIndex].quantity;
    const price = user.cartQuantity[itemIndex].product.price;
    return quantity*price;
  }

  getTotalPayment() {
    let totalPayment = 0;
    let user = this.cartUserQuantity.find( u => u.user === this.loginService.activeUser );
    for(let item of user.cartQuantity) {
      totalPayment += this.getProductTotalPrice(item.product.title);
    }
    return totalPayment
  }

  getNumberItems() {
    const user = this.cartUserQuantity.find( u => u.user === this.loginService.activeUser )
    return user.countItems;
  }

  checkUpdates() {
    const cartQuantity = this.cartUserQuantity.find( u => u.user === this.loginService.activeUser ).cartQuantity;
    const products = this.dataService.getProducts();
    for(let i = 0; i < cartQuantity.length; i++) {
      const product = products.find (p => p.title === cartQuantity[i].product.title);
      cartQuantity[i].product = product;
    }
  }

}
