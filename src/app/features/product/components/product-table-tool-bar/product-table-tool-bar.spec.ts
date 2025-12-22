import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTableToolBar } from './product-table-tool-bar';

describe('ProductTableToolBar', () => {
  let component: ProductTableToolBar;
  let fixture: ComponentFixture<ProductTableToolBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductTableToolBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTableToolBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
