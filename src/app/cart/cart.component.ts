import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { CartService } from '../services/cart.service';
import { PaymentService } from '../services/payment.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Output() productDetails = new EventEmitter();
  cart: Product[];
  constructor(private cartService: CartService, private paymentService: PaymentService) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  getNumCartItems() {
    return this.paymentService.CountItems;
  }

  getTotalPayment() {
    return this.paymentService.getTotalPayment();
  }

  viewProductDetails(event :{product: Product, from: string}) {
    this.productDetails.emit(event);
  }

}
