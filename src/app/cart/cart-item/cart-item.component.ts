import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../../model/product';
import { CartService } from '../../services/cart.service';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Output() Content = new EventEmitter();
  @Input() cartItem: Product;
  constructor(private cartService: CartService, private paymentService: PaymentService) { }

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
     return this.paymentService.getProductTotalPrice(this.cartItem.title);

  }

  removeCartItem() {
    this.cartService.removeCartItem(this.cartItem);
  }

  changeContent() {
    this.Content.emit({product: this.cartItem, from: 'cart'});
  }

}
