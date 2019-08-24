import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { CartService} from '../services/cart.service';
import { PaymentService} from '../services/payment.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() isOpen = new EventEmitter();
  @Output() openCart = new EventEmitter();
  @Output() openLogin = new EventEmitter();
  constructor(private cartService: CartService, private paymentService: PaymentService, private loginService: LoginService) { }

  ngOnInit() {
  }

  isLogin() {
     if (this.loginService.isLoggedIn()) {
       return 'logout';
     }
     return 'login';
  }

  onClickMenu() {
    this.isOpen.emit();
  }

  onClickCart() {
    this.openCart.emit();
  }

  getNumCartItems() {
    return this.paymentService.getNumberItems();
  }

  loginView() {
    if (this.loginService.isLoggedIn()) {
      this.loginService.logout();
    }
    else {
      this.openLogin.emit();
    }
  }

  isLoggedIn() {
    return this.loginService.isLoggedIn();
  }

}
