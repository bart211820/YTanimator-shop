import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopOptionsComponent } from './shop-options.component';

describe('ShopOptionsComponent', () => {
  let component: ShopOptionsComponent;
  let fixture: ComponentFixture<ShopOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
