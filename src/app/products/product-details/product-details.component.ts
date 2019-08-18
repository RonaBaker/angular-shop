import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from 'src/app/model/product';
import { trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Output() productsView = new EventEmitter();
  @Output() cartView = new EventEmitter();
  @Input() productDetails: Product;
  @Input() contentState: string;
  @Input() fromElement: string;

  constructor() { }

  ngOnInit() {
  }

  returnToProductsView() {
    this.productsView.emit();
  }

  returnToCartView() {
    this.cartView.emit();
  }

}
