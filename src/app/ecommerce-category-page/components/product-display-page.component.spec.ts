import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDisplayPageComponent } from './product-display-page.component';

describe('ProductDisplayPageComponent', () => {
  let component: ProductDisplayPageComponent;
  let fixture: ComponentFixture<ProductDisplayPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDisplayPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDisplayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
