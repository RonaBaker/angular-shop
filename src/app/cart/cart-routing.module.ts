import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';
import { AllowAccessCartGuard } from '../core/guards/allow-access-cart.guard';
import { ProductDetailsComponent } from '../products/product-details/product-details.component';

const routes: Routes = [
    { path: 'cart', component: CartComponent, canActivate: [AllowAccessCartGuard],
    children: [ { path: 'products/:id', component: ProductDetailsComponent}]},


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
}) 

export class CartRoutingModule {} 