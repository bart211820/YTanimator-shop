import {Component, Input, OnInit} from '@angular/core';
import {Animator} from '../../../../shared/modelsAndTheirServices/animator.model';

@Component({
  selector: 'app-shop-animator-option',
  templateUrl: './shop-animator-option.component.html',
  styleUrls: ['./shop-animator-option.component.css']
})
export class ShopAnimatorOptionComponent implements OnInit {
  @Input() animator: Animator;

  constructor() { }

  ngOnInit() {
  }

  getAnimatorName() {
    return this.animator.name;
  }

  getAnimatorImage() {
    return this.animator.imageURL;
  }
}
