import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartActionComponent } from './cart-action/cart-action.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { EditProductButtonComponent } from './edit-product-button/edit-product-button.component';


@NgModule({
  declarations: [
    CartActionComponent,
    ProductDetailsComponent,
    EditProductButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    CartActionComponent,
    ProductDetailsComponent,
    EditProductButtonComponent
  ]
})
export class SharedModule { }
