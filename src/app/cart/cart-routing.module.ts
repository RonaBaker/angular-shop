import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';
import { AllowAccessCartGuard } from './allow-access-cart.guard';
import { ProductDetailsComponent } from '../shared/product-details/product-details.component';

const routes: Routes = [
    { path: '', component: CartComponent, canActivate: [AllowAccessCartGuard],
    children: [ { path: 'products/:id', component: ProductDetailsComponent}]},
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)],
    exports: [RouterModule]
}) 

export class CartRoutingModule {} 