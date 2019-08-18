import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { CartService} from '../services/cart.service';
import { PaymentService} from '../services/payment.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() isOpen = new EventEmitter();
  @Output() openCart = new EventEmitter();
  constructor(private cartService: CartService, private paymentService: PaymentService) { }

  ngOnInit() {
  }

  onClickMenu() {
    this.isOpen.emit();
  }

  onClickCart() {
    this.openCart.emit();
  }

  getNumCartItems() {
    return this.paymentService.CountItems;
  }

}
