import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Animator} from '../../../shared/animator.model';

@Component({
  selector: 'app-shop-options',
  templateUrl: './shop-options.component.html',
  styleUrls: ['./shop-options.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShopOptionsComponent implements OnInit {
  animators: Animator[] = [
    new Animator('TheOdd1sOut', 'https://yt3.ggpht.com/a-/AAuE7mAdLPVNtqjYHu9gffkZSRsNDtdPW6T228iO9Q=s288-mo-c-c0xffffffff-rj-k-no'),
    new Animator('Jaiden Animations', 'https://yt3.ggpht.com/a-/AN66SAwHIhCiiJJETbMi2r4clVrW1nmeHNAc6yiSog=s288-mo-c-c0xffffffff-rj-k-no'),
    new Animator('Let Me Explain Studios', 'https://yt3.ggpht.com/a-/AAuE7mApexR-fC_RLgKFpS8vaNuQFQl0jWrqs2p8ow=s288-mo-c-c0xffffffff-rj-k-no'),
    new Animator('Tabbes', 'https://yt3.ggpht.com/a-/AN66SAz-e4ub4a1NbQaHaQvINCCOTAL4fLU1c3QZ-Q=s288-mo-c-c0xffffffff-rj-k-no'),
    new Animator('Katzun', 'https://yt3.ggpht.com/a-/AN66SAxgnuNOPqhJj8M3r4R3wD6SuvKsS8KRShH1xA=s288-mo-c-c0xffffffff-rj-k-no')
  ];

  constructor() { }

  ngOnInit() {
  }

}
