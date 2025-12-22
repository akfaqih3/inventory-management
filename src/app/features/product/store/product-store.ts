import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { ProductService } from '../services/product-service';
import { ProductState } from './product-state';
import { ProductModel } from '../models/product-model';

@Injectable({
  providedIn: 'root',
})
export class ProductStore {
  private _productService = inject(ProductService);

  private _state = signal<ProductState>(
    this._productService.getState() || {
      data: [],
      searchQuery: "",
      categoriesSelected: [],
      sortBy: "name",
      sortOrder: "asc",
      page: 1,
      pageSize: 10
    }
  )

  constructor() {
    effect( () => {
      this._productService.saveState(this._state())
    })
  }

  readonly pageSize = computed(() => {
    const { pageSize } = this._state();
    return pageSize;
  })

  readonly page = computed(() => {
    const { page } = this._state();
    return page;
  })

  readonly visibleProducts = computed(() => {
    const { data, page, pageSize, sortBy, sortOrder, searchQuery, categoriesSelected } = this._state();

    const search = searchQuery.trim().toLowerCase();

    return data.filter(product => {

      const matchesCategory = categoriesSelected.length === 0 || categoriesSelected.includes(product.categoryId);
      const matchesSearch = !search || product.name.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      switch (sortBy) {
        case "name":
          return sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        case "price":
          return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
        case "quantity":
          return sortOrder === "asc" ? a.quantity - b.quantity : b.quantity - a.quantity;
        default:
          return 0;
      }
    }).slice((page - 1) * pageSize, page * pageSize);
  })

  updateSearch(query: string) {
    this._state.update(state => ({ ...state, searchQuery: query }));
  }

  updateSort(_sortBy: keyof ProductModel){
    this._state.update(
      state => (
        {
          ...state,
          sortBy: _sortBy,
          sortOrder: state.sortBy === _sortBy && state.sortOrder === "asc" ? "desc" : "asc"
        }
      )
    )
  }

  setPage(page: number){
    this._state.update(state => ({ ...state, page }));
  }

  addProduct(product: ProductModel){
    this._state.update(state => ({ ...state, data: [...state.data, product] }));
  }

  updateProduct(product: ProductModel){
    this._state.update(state => ({ ...state, data: state.data.map(p => p.id === product.id ? product : p) }));
  }

  removeProduct(productId: number){
    this._state.update(state => ({ ...state, data: state.data.filter(p => p.id !== productId) }));
  }

  toggleCategory(categoryId: number){
    this._state.update(state => ({
      ...state,
      categoriesSelected: state.categoriesSelected.includes(categoryId)
        ? state.categoriesSelected.filter(c => c !== categoryId)
        : [...state.categoriesSelected, categoryId]
    }));
  }

  clearCategories(){
    this._state.update(state => ({ ...state, categoriesSelected: [] }));
  }

  clearSearch(){
    this._state.update(state => ({ ...state, searchQuery: "" }));
  }

  setPageSize(pageSize: number){
    this._state.update(state => ({ ...state, pageSize }));
  }

  clear(){
    this._state.update(() => ({
      data: [],
      searchQuery: "",
      categoriesSelected: [],
      sortBy: "name",
      sortOrder: "asc",
      page: 1,
      pageSize: 10
    }));
  }


}
