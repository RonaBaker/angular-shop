import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from 'src/app/model/product';
import { trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  animations: [
    trigger('productDetailsState', [
      state('DETAILS', style({
        transform: 'scale(0.9)'
      })),
      transition('* => DETAILS', animate('500ms ease-in')),
    ])
  ]
})
export class ProductDetailsComponent implements OnInit {

  @Output() productsView = new EventEmitter();
  @Input() productDetails: Product;
  @Input() contentState: string;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.productsView.emit();
  }

}
