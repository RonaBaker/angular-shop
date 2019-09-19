import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { RouterModule, Router } from '@angular/router';
import { CartRoutingModule } from './cart-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent,
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    RouterModule,
    SharedModule
  ],

  exports: [
  ]
})
export class CartModule { }
