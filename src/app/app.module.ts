import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductItemComponent } from './components/products/product-item/product-item.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { SocialTabComponent } from './components/social-tab/social-tab.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { CartActionComponent } from './components/cart-action/cart-action.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { LanguagePipe } from './pipes/language.pipe';
import { ConfirmationDirective } from './directives/confirmation/confirmation.directive';
import { PageNotFoundComponent } from './components/error/page-not-found/page-not-found.component';
import { PermissionDeniedComponent } from './components/error/permission-denied/permission-denied.component';
import { EditProductButtonComponent } from './components/edit-product-button/edit-product-button.component';
import { ProductNotFoundComponent } from './components/error/product-not-found/product-not-found.component'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpCorrelationInterceptor } from './http-logging-interceptor';

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
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpCorrelationInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
