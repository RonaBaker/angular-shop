import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductNotFoundComponent } from './product-not-found/product-not-found.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductItemComponent,
    ProductNotFoundComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    ProductsRoutingModule
  ],

  exports: [
  ]
})
export class ProductsModule { }
