import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './webshop/footer/footer.component';
import { HeaderComponent } from './webshop/header/header.component';
import { ShopComponent } from './webshop/shop/shop.component';
import { ShopItemComponent } from './webshop/shop/shop-item/shop-item.component';
import { ItemComponent } from "./webshop/item/item.component";
import { RegistInComponent } from "./webshop/regist-in/regist-in.component";
import { LoginComponent } from "./webshop/regist-in/login/login.component";
import { RegisterComponent } from "./webshop/regist-in/register/register.component";
import { FormsModule } from "@angular/forms";
import { AdminIndexComponent } from "./admin/admin-index/admin-index.component";
import { MeComponent } from './webshop/me/me.component';
import { AdminComponent } from './admin/admin.component';
import { BasketListComponent } from './webshop/me/basket-list/basket-list.component';
import { OrderListComponent } from './webshop/me/order-list/order-list.component';
import { AccountComponent } from './webshop/me/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ShopComponent,
    ShopItemComponent,
    ItemComponent,
    RegistInComponent,
    LoginComponent,
    RegisterComponent,
    AdminIndexComponent,
    MeComponent,
    AdminComponent,
    BasketListComponent,
    OrderListComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    HttpClientModule,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
