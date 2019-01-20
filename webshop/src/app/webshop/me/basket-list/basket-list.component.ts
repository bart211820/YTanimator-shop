import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-basket-list',
  templateUrl: './basket-list.component.html',
  styleUrls: ['./basket-list.component.css']
})
export class BasketListComponent implements OnInit {

  @Input() userID;

  constructor() { }

  ngOnInit() {
  }

}
