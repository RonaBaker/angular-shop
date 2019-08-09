import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import products from '../../assets/data/products.json';
import categories from '../../assets/data/categories.json';
import { Product } from '../model/product.js';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  defaultCategory = 'All';
  currentCategoryId = this.defaultCategory; // By default show all products
  productArray = products as Product[];
  categoryArray = categories ;
  filteredArray: Product[];

  @Output() productDetails = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  filterCategory(categoryId) {
    this.currentCategoryId = categoryId;
    if ( this.currentCategoryId !== this.defaultCategory) {
      this.filteredArray = this.productArray.filter((product) => {
        return product.categoryId ===  this.currentCategoryId ;
      });
      }
    }

    viewProductDetails(event) {
      this.productDetails.emit(event);
    }
}
