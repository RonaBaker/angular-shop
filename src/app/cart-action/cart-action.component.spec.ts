import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartActionComponent } from './cart-action.component';

describe('CartActionComponent', () => {
  let component: CartActionComponent;
  let fixture: ComponentFixture<CartActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
