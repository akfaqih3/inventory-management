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
    effect(() => {
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

  readonly pageCount = computed(() => {
    const {  pageSize } = this._state();
    return Math.ceil(this.visibleProducts().length / pageSize);
  })

  readonly categoreisSelected = computed(() => {
    const { categoriesSelected } = this._state();
    return categoriesSelected;
  })

  readonly sortBy = computed(() => {
    const { sortBy } = this._state();
    return sortBy;
  })

  readonly sortOrder = computed(() => {
    const { sortOrder } = this._state();
    return sortOrder;
  })

  productEditable(productId: number): ProductModel | undefined {
    return this._state().data.find(product => product.id === productId);
  }

  readonly visibleProducts = computed(() => {
    const { data, sortBy, sortOrder, searchQuery, categoriesSelected } = this._state();

    const search = searchQuery.trim().toLowerCase();
    return data.filter(product => {

      const matchesCategory = categoriesSelected.length === 0 || categoriesSelected.includes(product.categoryId);
      const matchesSearch = !search || product.name.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      const order = sortOrder === "asc" ? 1 : -1;
      switch (sortBy) {
        case "name":
          return order * a.name.localeCompare(b.name);
        case "categoryId":
          return order * (a.categoryId - b.categoryId);
        case "price":
          return order * (a.price - b.price);
        case "quantity":
          return order * (a.quantity - b.quantity);
        case "createdAt":
          return order * (new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        default:
          return 0;
      }
    });
  })

  readonly pagenatedProducts = computed(()=>{
      const {page,pageSize} = this._state();
      return this.visibleProducts().slice((page - 1) * pageSize, page * pageSize);
    })

  updateSearch(query: string) {
    this._state.update(state => ({ ...state, searchQuery: query }));
  }

  updateSort(_sortBy: keyof ProductModel) {
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

  setPage(page: number) {
    this._state.update(state => ({ ...state, page }));
  }

  addProduct(product: ProductModel) {
    this._state.update(state => ({ ...state, data: [...state.data, product] }));
  }

  updateProduct(product: ProductModel) {
    this._state.update(state => ({ ...state, data: state.data.map(p => p.id === product.id ? product : p) }));
  }

  removeProduct(productId: number) {
    this._state.update(state => ({ ...state, data: state.data.filter(p => p.id !== productId) }));
  }

  toggleCategory(categoryId: number) {
    this._state.update(state => ({
      ...state,
      categoriesSelected: state.categoriesSelected.includes(categoryId)
        ? state.categoriesSelected.filter(c => c !== categoryId)
        : [...state.categoriesSelected, categoryId]
    }));
  }

  clearCategories() {
    this._state.update(state => ({ ...state, categoriesSelected: [] }));
  }

  clearSearch() {
    this._state.update(state => ({ ...state, searchQuery: "" }));
  }

  setPageSize(pageSize: number) {
    this._state.update(state => ({ ...state, pageSize }));
    const {page} =this._state()
    if (page > this.pageCount()){
      this.setPage(this.pageCount())
    }

  }

  clear() {
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
