import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductsPageComponent } from './create-products-page.component';

describe('CreateProductsPageComponent', () => {
  let component: CreateProductsPageComponent;
  let fixture: ComponentFixture<CreateProductsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateProductsPageComponent]
    });
    fixture = TestBed.createComponent(CreateProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
