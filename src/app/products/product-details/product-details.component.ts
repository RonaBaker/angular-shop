import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Output() productsView = new EventEmitter();
  @Input() productDetails: Product;
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.productsView.emit();
  }

}
