import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './webshop/home/home.component';
import {ShopComponent} from './webshop/shop/shop.component';
import {AboutComponent} from './webshop/about/about.component';
import {ItemComponent} from "./webshop/item/item.component";

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'shop/:id', component: ItemComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
