import { Component, OnInit,} from '@angular/core';
import { Product } from '../app/model/product';
import { trigger, state, style, transition, query, animate, group} from '@angular/animations';
import { routerTransition } from './route-transitions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ routerTransition, 
    trigger('sideBarState', [
      state('shown', style({
        transform: 'translateX(0px)'
      })),
      state('hidden', style({
        transform: 'translateX(-200px)'
      })),
      transition('shown <=> hidden', animate('500ms'))
    ])
  ]
})
export class AppComponent implements OnInit {
  title: string;
  sidebarState: string;
  product: Product;
  fromElement: string;
  productEdit: Product;

  ngOnInit() {
    this.title = 'angular-shop';
    this.sidebarState = 'hidden';
  }

  toggleMenu() {
    this.sidebarState === 'shown'? this.sidebarState = 'hidden' : this.sidebarState = 'shown';
  }

}
