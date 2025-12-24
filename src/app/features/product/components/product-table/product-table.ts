import { Component, computed, inject, output } from '@angular/core';
import { ProductStore } from '../../store/product-store';
import { DatePipe } from '@angular/common';
import { ProductTableToolBar } from "../product-table-tool-bar/product-table-tool-bar";
import { ProductTableSearch } from "../product-table-search/product-table-search";
import { ProductTableFilter } from "../product-table-filter/product-table-filter";
import { categoryMock } from '../../models/product-mock';
import { ProductModel } from '../../models/product-model';

interface ProductTableHeader {
  label: string;
}

@Component({
  selector: 'app-product-table',
  imports: [DatePipe, ProductTableToolBar, ProductTableSearch, ProductTableFilter],
  templateUrl: './product-table.html',
  styleUrl: './product-table.css',
})
export class ProductTable {
  private _productStore = inject(ProductStore);

  mockCategories = categoryMock;

  products = this._productStore.visibleProducts;

  currentPage = this._productStore.page;
  pageSize = this._productStore.pageSize;

  pageCount = this._productStore.pageCount;

  categoriesSelected = this._productStore.categoreisSelected;

  productEditable = output<ProductModel>();


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
    }
  ]

  editProduct(productId: number) {
    const product = this._productStore.productEditable(productId);
    if(product){
      this.productEditable.emit(product);
    }
  }

  searchInputChanged(e:any){
    this._productStore.updateSearch(e);
  }

  selectCategory(categoryId:number){
    this._productStore.toggleCategory(categoryId);
  }

  setPageSize(pageSize:number){
    this._productStore.setPageSize(pageSize);
  }

  setPageIndex(pageIndex:number){
    this._productStore.setPage(pageIndex);
  }

  sortBy(sortBy:string ){
    this._productStore.updateSort(sortBy as keyof ProductModel);
  }

}
