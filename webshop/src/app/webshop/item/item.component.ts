import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../shared/api.service";
import {AuthorizationService} from "../../shared/authorization.service";
import {ItemService} from "../../shared/modelsAndTheirServices/item.service";
import {Item} from "../../shared/modelsAndTheirServices/item";
import {AnimatorService} from "../../shared/modelsAndTheirServices/animator.service";
import {Animator} from "../../shared/modelsAndTheirServices/animator";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers: [
    ApiService,
    AuthorizationService,
    ItemService,
    AnimatorService
  ]
})
export class ItemComponent implements OnInit {
  private item;
  private itemObject: Item;
  private animator;
  private animatorObject: Animator;
  private itemID;

  constructor(private api: ApiService, private authService: AuthorizationService, private router: Router, private itemService: ItemService, private animatorService: AnimatorService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.itemID = this.route.snapshot.params['id'];
    this.item = this.itemService.getOne(this.itemID);
    this.getItem();
  }

  getItem(): void {
    this.item.subscribe(data => {
      this.itemObject = new Item(data);
      this.animator = this.animatorService.getOne(this.itemObject.getItemAnimatorId());
      this.getAnimator();
    });
  }

  getAnimator(): void {
    this.animator.subscribe(data => {
      this.animatorObject = new Animator(data);
    });
  }


}
