import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product} from '../../model/product';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Output() productDetails = new EventEmitter();
  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

  changeContentProduct() {
    this.productDetails.emit({product: this.product, from: 'products'});
  }
}
