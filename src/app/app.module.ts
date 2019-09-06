import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { SocialTabComponent } from './social-tab/social-tab.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { CartActionComponent } from './cart-action/cart-action.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { LanguagePipe } from './pipes/language.pipe';
import { ConfirmationDirective } from './confirmation/confirmation.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AllowAccessCartGuard } from './allow-access-cart.guard';
import { AllowAddNewProductGuard } from './allow-add-new-product.guard';
import { PermissionDeniedComponent } from '../app/permission-denied/permission-denied.component';
import { EditProductButtonComponent } from './edit-product-button/edit-product-button.component';
import { ProductNotFoundComponent } from './product-not-found/product-not-found.component'
import { allowNavigateAwayGuard } from './allow-navigate-away.guard';

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
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ContactComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    SocialTabComponent,
    CartComponent,
    CartItemComponent,
    CartActionComponent,
    LoginComponent,
    ProductFormComponent,
    LanguagePipe,
    ConfirmationDirective,
    PageNotFoundComponent,
    PermissionDeniedComponent,
    EditProductButtonComponent,
    ProductNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [allowNavigateAwayGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
