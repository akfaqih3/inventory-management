import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTableSearch } from './product-table-search';

describe('ProductTableSearch', () => {
  let component: ProductTableSearch;
  let fixture: ComponentFixture<ProductTableSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductTableSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTableSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
