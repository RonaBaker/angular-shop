import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './products/products/products.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { AllowAddNewProductGuard } from './core/guards/allow-add-new-product.guard';
import { ProductNotFoundComponent } from './products/product-not-found/product-not-found.component';
import { ContactComponent } from './contact/contact/contact.component';
import { AllowAccessCartGuard } from './core/guards/allow-access-cart.guard';
import { CartComponent } from './cart/cart.component';
import { PermissionDeniedComponent } from './components/permission-denied.component';
import { LoginComponent } from './login/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { allowNavigateAwayGuard } from './core/guards/allow-navigate-away.guard';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'products/:id/edit-product', component: ProductFormComponent, canActivate: [AllowAddNewProductGuard], canDeactivate: [allowNavigateAwayGuard], data: {editProduct: true} },
  { path: 'products/:id/productNotFound', component: ProductNotFoundComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'add-new-product', component: ProductFormComponent, canActivate: [AllowAddNewProductGuard], canDeactivate: [allowNavigateAwayGuard], data: {editProduct: false}},
  { path: 'permission-denied', component: PermissionDeniedComponent},
  { path: 'login', component: LoginComponent },
 // { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [allowNavigateAwayGuard]
})
export class AppRoutingModule { }
