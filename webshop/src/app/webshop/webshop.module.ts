import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopAnimatorOptionComponent } from './shop/shop-options/shop-animator-option/shop-animator-option.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [ShopAnimatorOptionComponent, ItemComponent],
  imports: [
    CommonModule
  ]
})
export class WebshopModule { }
