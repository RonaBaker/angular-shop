import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { Product } from '../model/product';
import { Category } from '../model/category';
import { trigger, state, style, transition, animate} from '@angular/animations';
import { DataService } from '../services/data.service';


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
  productArray: Product[];
  categoryArray: Category[];
  filteredArray: Product[];
  @Input() contentState: string;
  @Output() productDetails = new EventEmitter();
  @Output() edit = new EventEmitter();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.defaultCategory = 'All';
    this.currentCategoryId = this.defaultCategory; // By default show all products
    this.productArray = this.dataService.getProducts();
    this.categoryArray = this.dataService.getCategories(); 
  }

  filterCategory(categoryId : string) {
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

    editProduct(event: Product) {
      this.edit.emit(event);
    }
}
