import { Component, computed, inject, output } from '@angular/core';
import { ProductStore } from '../../store/product-store';
import { DatePipe } from '@angular/common';
import { ProductTableToolBar } from "../product-table-tool-bar/product-table-tool-bar";
import { ProductTableSearch } from "../product-table-search/product-table-search";
import { ProductTableFilter } from "../product-table-filter/product-table-filter";
import { categoryMock } from '../../models/product-mock';
import { ProductModel } from '../../models/product-model';
import { TranslateModule } from '@ngx-translate/core';
import { StockStatusDirective } from '../../../../shared/directives/stock-status.directive';
import { StockStatusComponent } from '../../../../shared/components/stock-status/stock-status.component';

interface ProductTableHeader {
  label: string;
  key: keyof ProductModel;
}

@Component({
  selector: 'app-product-table',
  imports: [DatePipe, ProductTableToolBar, ProductTableSearch, ProductTableFilter, TranslateModule, StockStatusDirective, StockStatusComponent],
  templateUrl: './product-table.html',
  styleUrl: './product-table.css',
})
export class ProductTable {
  private _productStore = inject(ProductStore);

  mockCategories = categoryMock;

  products = this._productStore.pagenatedProducts;

  currentPage = this._productStore.page;
  pageSize = this._productStore.pageSize;

  pageCount = this._productStore.pageCount;

  categoriesSelected = this._productStore.categoreisSelected;

  activeSortBy = this._productStore.sortBy;
  activeSortOrder = this._productStore.sortOrder;

  productEditable = output<ProductModel>();
  productDeleted = output<number>();


  items: ProductTableHeader[] = [
    {
      label: "product.table.headers.name",
      key: "name"
    },
    {
      label: "product.table.headers.category",
      key: "categoryId"
    },
    {
      label: "product.table.headers.price",
      key: "price"
    },
    {
      label: "product.table.headers.quantity",
      key: "quantity"
    },
    {
      label: "product.table.headers.status",
      key: "quantity" // Using quantity key for status column
    },
    {
      label: "product.table.headers.createdAt",
      key: "createdAt"
    }
  ]

  editProduct(productId: number) {
    const product = this._productStore.productEditable(productId);
    if (product) {
      this.productEditable.emit(product);
    }
  }

  deleteProduct(productId: number) {
    this.productDeleted.emit(productId);
  }

  searchInputChanged(e: any) {
    this._productStore.updateSearch(e);
  }

  selectCategory(categoryId: number) {
    this._productStore.toggleCategory(categoryId);
  }

  setPageSize(pageSize: number) {
    this._productStore.setPageSize(pageSize);
  }

  setPageIndex(pageIndex: number) {
    this._productStore.setPage(pageIndex);
  }

  sortBy(key: keyof ProductModel) {
    this._productStore.updateSort(key);
  }

}
