import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartActionComponent } from './cart-action/cart-action.component';
import { RouterModule, Router } from '@angular/router';
import { CartRoutingModule } from './cart-routing.module';
import { CartItemDetailsComponent } from './cart-item-details/cart-item-details.component';
import { ProductsModule } from '../products/products.module';



@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent,
    CartActionComponent,
    CartItemDetailsComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    RouterModule
  ],

  exports: [
    CartActionComponent
  ]
})
export class CartModule { }
