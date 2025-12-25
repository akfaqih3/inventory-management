import { Component, inject, signal, Signal } from '@angular/core';
import { ProductTable } from "../../components/product-table/product-table";
import { ProductForm } from "../../forms/product-form/product-form";
import { ProductStore } from '../../store/product-store';
import { ProductModel } from '../../models/product-model';
import { ToastService } from '../../../../core/services/toast.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-product-list-page',
  imports: [ProductTable, ProductForm,TranslateModule],
  templateUrl: './product-list-page.html',
  styleUrl: './product-list-page.css',
})
export class ProductListPage {
  private _productStore = inject(ProductStore);
  private _toastService = inject(ToastService);

  isFormOpen = signal<boolean>(false);

  productEditable = signal<ProductModel | undefined>(undefined);


  openForm() {
    this.isFormOpen.set(true);
  }

  closeForm() {
    this.isFormOpen.set(false);
  }

  editProduct(product: ProductModel) {
    this.productEditable.set(product);
    this.isFormOpen.set(true);
  }


  addProduct(product: ProductModel) {
    this._productStore.addProduct(product);
    this._toastService.show('product.productAdded');
  }

  save(product: ProductModel) {
    this._productStore.updateProduct(product);
    this.productEditable.set(undefined);
    this._toastService.show('product.productUpdated');
  }

}
