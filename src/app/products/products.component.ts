import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import products from '../../assets/data/products.json';
import categories from '../../assets/data/categories.json';
import { Product } from '../model/product.js';
import { trigger, state, style, transition, animate} from '@angular/animations';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [
    trigger('productsState', [
      state('PRODUCTS', style({
        transform: 'scale(0.9)'
      })),
      transition('* => PRODUCTS', animate('500ms')),
    ])
  ]
})
export class ProductsComponent implements OnInit {

  defaultCategory: string;
  currentCategoryId: string;
  productArray;
  categoryArray;
  filteredArray: Product[];
  @Input() contentState: string;
  @Output() productDetails = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.defaultCategory = 'All';
    this.currentCategoryId = this.defaultCategory; // By default show all products
    this.productArray = products as Product[];
    this.categoryArray = categories ;
  }

  filterCategory(categoryId) {
    this.currentCategoryId = categoryId;
    if ( this.currentCategoryId !== this.defaultCategory) {
      this.filteredArray = this.productArray.filter((product) => {
        return product.categoryId ===  this.currentCategoryId ;
      });
      }
    }

    viewProductDetails(event: {product: Product, from: string}) {
      this.productDetails.emit(event);
    }
}
