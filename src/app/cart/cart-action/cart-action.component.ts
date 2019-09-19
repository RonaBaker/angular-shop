import { Component, OnInit, Input} from '@angular/core';
import { CartService } from '../cart.service';
import { Product} from '../../core/model/product';
import { LoginService } from '../../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-action',
  templateUrl: './cart-action.component.html',
  styleUrls: ['./cart-action.component.css']
})
export class CartActionComponent implements OnInit {

  @Input() product: Product;
  cartAction: string;

  constructor(private cartService: CartService, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    if(this.cartService.findCartItem(this.product)) { 
      this.cartAction = 'Remove From Cart';
    }
    else {
      this.cartAction = 'Add To Cart';
    }
  }

  updateCart(product: Product) {
    if (this.cartService.findCartItem(product)) { // Product is in cart
      this.cartAction = 'Add To Cart';
      this.cartService.removeCartItem(product);
      if (this.router.url.includes('cart')) {
        this.router.navigate(['/cart']);
      }
    }
    else {
      this.cartAction = 'Remove From Cart';
      this.cartService.addCartItem(product);
    }
  }

  isLoggedIn() {
    return this.loginService.isLoggedIn();
  }

  checkAction() {
    if (!this.loginService.isLoggedIn()) {
      return this.cartAction = 'Add To Cart';
    }
    else return this.cartAction;
  }

}
