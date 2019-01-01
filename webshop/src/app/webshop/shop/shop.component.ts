import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../shared/api.service";
import {Router} from "@angular/router";
import {AuthorizationService} from "../../shared/authorization.service";
import {Observable} from "rxjs";
import {Item} from "./item";
import {ShopService} from "./shop.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers: [
    ApiService,
    AuthorizationService,
    ShopService
  ]
})
export class ShopComponent implements OnInit {
  private items;

  constructor(private api: ApiService, private authService: AuthorizationService, private router: Router, private shopService: ShopService) { }

  ngOnInit() {
    this.items = this.shopService.getAll();
    this.getAll();
  }

  getAll(): void {
    this.items.subscribe(data => {
      console.log(data);
    });
  }



}
