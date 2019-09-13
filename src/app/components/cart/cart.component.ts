import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { CartService } from '../../services/cart.service';
import { PaymentService } from '../../services/payment.service';
import { Product } from '../../model/product';
import { LoginService } from '../../services/login.service';
import { Observable } from 'rxjs';;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Observable<Product[]>;
  itemCount: Observable<number>
  constructor(private cartService: CartService, 
              private paymentService: PaymentService,
              private loginService: LoginService) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.itemCount = this.paymentService.countItems;
  }

  getTotalPayment() {
    return this.paymentService.getTotalPayment();
  }

  isLoggedIn() {
    return this.loginService.isLoggedIn();
  }

}
