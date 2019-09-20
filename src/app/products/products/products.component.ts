import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { Product } from '../../core/model/product';
import { Category } from '../../core/model/category';
import { DataService } from '../../core/services/data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],

})
export class ProductsComponent implements OnInit {

  allCategories: string;
  currentCategoryId: string;
  productArray: Observable<Product[]>;
  categoryArray: Observable<Category[]>;
  filteredArray : Observable<Product[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.allCategories = 'All';
    this.currentCategoryId = this.allCategories; // By default show all products
    this.productArray = this.dataService.getProducts();
    this.categoryArray = this.dataService.getCategories(); 
  }

  filterCategory(categoryId : string) {
    this.currentCategoryId = categoryId;
    if ( this.currentCategoryId !== this.allCategories) {
      this.filteredArray = this.dataService.getFilteredProducts(categoryId);
    }
  }
}
