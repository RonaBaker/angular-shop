import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { EditProductButtonComponent } from './edit-product-button/edit-product-button.component';
import { ProductNotFoundComponent } from './product-not-found/product-not-found.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { RouterModule } from '@angular/router';
import { CartModule } from '../cart/cart.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    EditProductButtonComponent,
    ProductNotFoundComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CartModule,
    ReactiveFormsModule,
  ],

  exports: [
    ProductDetailsComponent
  ]
})
export class ProductsModule { }
