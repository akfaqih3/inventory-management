import { Injectable } from '@angular/core';
import { ProductState } from '../store/product-state';
import { productMock } from '../models/product-mock';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly STORAGE_KEY = "product_state";


  saveState(state: ProductState){
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(state));
  }

  getState(): ProductState | null{
    const state = localStorage.getItem(this.STORAGE_KEY);
    return state ? JSON.parse(state) : {
      data: productMock,
      searchQuery: "",
      categoriesSelected: [],
      sortBy: "name",
      sortOrder: "asc",
      page: 1,
      pageSize: 10
    };

  }

}
