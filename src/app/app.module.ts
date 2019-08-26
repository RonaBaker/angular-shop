import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { AddProductComponent } from './add-product/add-product.component';
import { LanguagePipe } from './pipes/language.pipe';
import { ConfirmationDirective } from './confirmation/confirmation.directive';

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
    AddProductComponent,
    LanguagePipe,
    ConfirmationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
