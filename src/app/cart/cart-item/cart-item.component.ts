import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../../core/model/product';
import { CartService } from '../cart.service';
import { PaymentService } from '../payment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: Product;
  constructor(private cartService: CartService, private paymentService: PaymentService,
    private router: Router) { }

  ngOnInit() {
  }

  addQuantity() {
    this.paymentService.addQuantity(this.cartItem);
  }

  removeQuantity() {
    this.paymentService.removeQuantity(this.cartItem);
  }

  getQuantity() {
    return this.paymentService.getProductQuantity(this.cartItem);
  }

  getTotalPrice() {
     return this.paymentService.getProductTotalPrice(this.cartItem.id);

  }

  removeCartItem() {
    this.cartService.removeCartItem(this.cartItem);
  }

}
