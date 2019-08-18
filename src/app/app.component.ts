import { Component, OnInit,} from '@angular/core';
import { Product } from '../app/model/product';
import { trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('sideBarState', [
      state('shown', style({
        transform: 'translateX(0px)'
      })),
      state('hidden', style({
        transform: 'translateX(-200px)'
      })),
      transition('shown <=> hidden', animate('500ms'))
    ]),
  ]
})
export class AppComponent implements OnInit {
  title: string;
  sidebarState: string;
  currentContent: string;
  product: Product;

  ngOnInit() {
    this.title = 'angular-shop';
    this.sidebarState = 'hidden';
    this.currentContent = 'HOME';
  }

  toggleMenu() {
    this.sidebarState === 'shown'? this.sidebarState = 'hidden' : this.sidebarState = 'shown';
  }

  changeContent(event) {
    this.currentContent = event;
    this.toggleMenu();
    
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

  onClick() {
    if (this.sidebarState === 'shown') {
      this.sidebarState = 'hidden';
    }
  }


}
