import { Component, inject } from '@angular/core';
import { ProductStore } from '../../store/product-store';
import { DatePipe } from '@angular/common';

interface ProductTableHeader {
  label: string;
}

@Component({
  selector: 'app-product-table',
  imports: [DatePipe],
  templateUrl: './product-table.html',
  styleUrl: './product-table.css',
})
export class ProductTable {
  private _productStore = inject(ProductStore);

  products = this._productStore.visibleProducts;

  items: ProductTableHeader[] = [
    {
      label: "Name"
    },
    {
      label: "category"
    },
    {
      label: "Price"
    },
    {
      label: "Quantity"
    },
    {
      label: "Created At"
    },
    {
      label: "Actions"
    }
  ]


  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  editProduct(productId: number) {
    console.log(productId);
  }

}
