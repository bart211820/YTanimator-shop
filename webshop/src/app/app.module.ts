import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './webshop/footer/footer.component';
import { HeaderComponent } from './webshop/header/header.component';
import { HomeComponent } from './webshop/home/home.component';
import { ShopComponent } from './webshop/shop/shop.component';
import { ShopOptionsComponent } from './webshop/shop/shop-options/shop-options.component';
import { ShopAnimatorOptionComponent } from './webshop/shop/shop-options/shop-animator-option/shop-animator-option.component'
import { ShopItemComponent } from './webshop/shop/shop-item/shop-item.component';
import { AboutComponent } from './webshop/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ShopComponent,
    ShopOptionsComponent,
    ShopAnimatorOptionComponent,
    ShopItemComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
