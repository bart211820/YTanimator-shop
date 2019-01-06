import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../shared/api.service";
import {AuthorizationService} from "../../shared/authorization.service";
import {ItemService} from "../../shared/modelsAndTheirServices/item.service";
import {Item} from "../../shared/modelsAndTheirServices/item";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers: [
    ApiService,
    AuthorizationService,
    ItemService
  ]
})
export class ItemComponent implements OnInit {
  private item;
  private itemObject;
  private itemID;

  constructor(private api: ApiService, private authService: AuthorizationService, private router: Router, private itemService: ItemService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.itemID = this.route.snapshot.params['id'];
    this.item = this.itemService.getOne(this.itemID);
    this.getOne();
  }

  getOne(): void {
    this.item.subscribe(data => {
      this.itemObject = new Item(data);
    });

  }



}
