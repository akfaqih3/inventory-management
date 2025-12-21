import { Injectable } from '@angular/core';
import { ProductState } from '../store/product-state';

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
    return state ? JSON.parse(state) : null;
  }

}
