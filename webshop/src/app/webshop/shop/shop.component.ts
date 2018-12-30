import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  items = [0, 1, 2, 3, 4];

  constructor() { }

  ngOnInit() {
  }

}
