import { Component } from '@angular/core';
import { Product } from '../app/model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isShown = true;
  title = 'angular-shop';
  currentContent = 'HOME';
  product: Product;

  toggleMenu() {
    this.isShown = !this.isShown;
  }

  changeContent(event) {
    this.currentContent = event;
    this.isShown = !this.isShown;
  }

  productDetailsContent(event) {
    this.product = event;
    this.currentContent = 'DETAILS';
  }

  getProductDetails(): Product {
      return this.product;
  }

  changeToProductsView() {
    this.currentContent = 'PRODUCTS';
  }


}
