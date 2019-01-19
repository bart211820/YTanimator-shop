import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShopComponent} from './webshop/shop/shop.component';
import {ItemComponent} from "./webshop/item/item.component";
import {RegistInComponent} from "./webshop/regist-in/regist-in.component";

const routes: Routes = [
  { path: '', redirectTo: 'shop', pathMatch: 'full' },
  { path: 'shop', component: ShopComponent },
  { path: 'shop/:id', component: ItemComponent },
  { path: 'login', component: RegistInComponent },
  { path: '**', redirectTo: 'shop' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
