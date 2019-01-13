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
import { AboutComponent } from './webshop/about/about.component';
import {ItemComponent} from "./webshop/item/item.component";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ShopComponent,
    ShopItemComponent,
    AboutComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    HttpClientModule,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
