import { Component, OnInit, Input} from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product} from '../model/product';

@Component({
  selector: 'app-cart-action',
  templateUrl: './cart-action.component.html',
  styleUrls: ['./cart-action.component.css']
})
export class CartActionComponent implements OnInit {

  @Input() product: Product;
  cartAction: string;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    if(this.cartService.findCartItem(this.product)) { 
      this.cartAction = 'Remove From Cart';
    }
    else {
      this.cartAction = 'Add To Cart';
    }
  }

  updateCart(product: Product) {
    if(this.cartService.findCartItem(product)) { // Product is in cart
      this.cartAction = 'Add To Cart';
      this.cartService.removeCartItem(product);
    }
    else {
      this.cartAction = 'Remove From Cart';
      this.cartService.addCartItem(product);
    }
  }

}
