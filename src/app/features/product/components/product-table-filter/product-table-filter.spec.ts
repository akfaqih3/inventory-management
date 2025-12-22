import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTableFilter } from './product-table-filter';

describe('ProductTableFilter', () => {
  let component: ProductTableFilter;
  let fixture: ComponentFixture<ProductTableFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductTableFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTableFilter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
