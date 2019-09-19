import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductButtonComponent } from './edit-product-button.component';

describe('EditProductButtonComponent', () => {
  let component: EditProductButtonComponent;
  let fixture: ComponentFixture<EditProductButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProductButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
