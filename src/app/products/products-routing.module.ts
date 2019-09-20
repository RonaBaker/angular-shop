import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from '../shared/product-details/product-details.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { AllowAddNewProductGuard } from '../core/guard/allow-add-new-product.guard';
import { allowNavigateAwayGuard } from '../core/guard/allow-navigate-away.guard';
import { ProductNotFoundComponent } from './product-not-found/product-not-found.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: ProductsComponent },
            { path: 'add-new-product', pathMatch:'full', component: ProductFormComponent, canActivate: [AllowAddNewProductGuard], canDeactivate: [allowNavigateAwayGuard], data: { editProduct: false } },
            { path: ':id', component: ProductDetailsComponent },
            { path: ':id/edit-product', component: ProductFormComponent, canActivate: [AllowAddNewProductGuard], canDeactivate: [allowNavigateAwayGuard], data: { editProduct: true } },
            { path: ':id/productNotFound', component: ProductNotFoundComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductsRoutingModule { } 