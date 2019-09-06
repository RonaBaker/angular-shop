import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AllowAddNewProductGuard } from './guards/allow-add-new-product.guard';
import { ProductNotFoundComponent } from './components/error/product-not-found/product-not-found.component';
import { ContactComponent } from './components/contact/contact.component';
import { AllowAccessCartGuard } from './guards/allow-access-cart.guard';
import { CartComponent } from './components/cart/cart.component';
import { PermissionDeniedComponent } from './components/error/permission-denied/permission-denied.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/error/page-not-found/page-not-found.component';
import { allowNavigateAwayGuard } from './guards/allow-navigate-away.guard';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'products/:id/edit-product', component: ProductFormComponent, canActivate: [AllowAddNewProductGuard], canDeactivate: [allowNavigateAwayGuard], data: {editProduct: true} },
  { path: 'products/:id/productNotFound', component: ProductNotFoundComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'cart', component: CartComponent, canActivate: [AllowAccessCartGuard], children:[{
    path: 'products/:id',
    component: ProductDetailsComponent
  }]
  },
  { path: 'add-new-product', component: ProductFormComponent, canActivate: [AllowAddNewProductGuard], canDeactivate: [allowNavigateAwayGuard], data: {editProduct: false}},
  { path: 'permission-denied', component: PermissionDeniedComponent},
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [allowNavigateAwayGuard]
})
export class AppRoutingModule { }
