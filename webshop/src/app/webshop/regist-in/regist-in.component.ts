import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-regist-in',
  templateUrl: './regist-in.component.html',
  styleUrls: ['./regist-in.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegistInComponent implements OnInit {

  registering = false;

  constructor() { }

  ngOnInit() {
  }

  switchLoginOrRegister(agreed: boolean) {
    this.registering = agreed;
  }

}
