import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { AllowAddNewProductGuard } from './products/allow-add-new-product.guard';
import { allowNavigateAwayGuard } from './allow-navigate-away.guard';
import { ProductNotFoundComponent } from './product-not-found/product-not-found.component';
import { PermissionDeniedComponent } from '../components/permission-denied.component';

const routes: Routes = [
    { path: 'products', component: ProductsComponent },
    { path: 'products/:id', component: ProductDetailsComponent },
    { path: 'products/:id/edit-product', component: ProductFormComponent, canActivate: [AllowAddNewProductGuard], canDeactivate: [allowNavigateAwayGuard], data: {editProduct: true} },
    { path: 'products/:id/productNotFound', component: ProductNotFoundComponent},
    { path: 'add-new-product', component: ProductFormComponent, canActivate: [AllowAddNewProductGuard], canDeactivate: [allowNavigateAwayGuard], data: {editProduct: false}},
    { path: 'permission-denied', component: PermissionDeniedComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
}) 

export class ProductsRoutingModule {} 