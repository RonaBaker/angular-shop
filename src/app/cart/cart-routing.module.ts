import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';
import { AllowAccessCartGuard } from './allow-access-cart.guard';
import { CartItemDetailsComponent } from './cart-item-details/cart-item-details.component';
import { ProductDetailsComponent } from '../products/product-details/product-details.component';

const routes: Routes = [
    { path: '', component: CartComponent, canActivate: [AllowAccessCartGuard],
    children: [ { path: 'items/:id', component: ProductDetailsComponent}]},


];

@NgModule({
    imports: [
        RouterModule.forChild(routes)],
    exports: [RouterModule]
}) 

export class CartRoutingModule {} 