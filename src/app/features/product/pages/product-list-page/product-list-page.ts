import { Component, inject, signal, Signal } from '@angular/core';
import { ProductTable } from "../../components/product-table/product-table";
import { ProductForm } from "../../forms/product-form/product-form";
import { ProductStore } from '../../store/product-store';
import { ProductModel } from '../../models/product-model';

@Component({
  selector: 'app-product-list-page',
  imports: [ProductTable, ProductForm],
  templateUrl: './product-list-page.html',
  styleUrl: './product-list-page.css',
})
export class ProductListPage {
  private _productStore = inject(ProductStore);

  isFormOpen = signal<boolean>(false);

  productEditable = signal<ProductModel|undefined>(undefined);


  openForm(){
    this.isFormOpen.set(true);
  }

  closeForm(){
    this.isFormOpen.set(false);
  }

  editProduct(product: ProductModel){
    this.productEditable.set(product);
    this.isFormOpen.set(true);
  }


  addProduct(product: ProductModel){
    this._productStore.addProduct(product);
  }

  save(product:ProductModel){
    this._productStore.updateProduct(product);
    this.productEditable.set(undefined);
  }

}
