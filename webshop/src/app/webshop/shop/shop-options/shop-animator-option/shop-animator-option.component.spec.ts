import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAnimatorOptionComponent } from './shop-animator-option.component';

describe('ShopAnimatorOptionComponent', () => {
  let component: ShopAnimatorOptionComponent;
  let fixture: ComponentFixture<ShopAnimatorOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopAnimatorOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopAnimatorOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
