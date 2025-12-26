import { Component, inject, signal } from '@angular/core';
import { ProductTable } from "../../components/product-table/product-table";
import { ProductForm } from "../../forms/product-form/product-form";
import { ProductStore } from '../../store/product-store';
import { ProductModel } from '../../models/product-model';
import { ToastService } from '../../../../core/services/toast.service';
import { TranslateModule } from '@ngx-translate/core';

import { ConfirmModalComponent } from '../../../../shared/components/confirm-modal/confirm-modal';

@Component({
  selector: 'app-product-list-page',
  imports: [ProductTable, ProductForm, TranslateModule, ConfirmModalComponent],
  templateUrl: './product-list-page.html',
  styleUrl: './product-list-page.css',
})
export class ProductListPage {
  private _productStore = inject(ProductStore);
  private _toastService = inject(ToastService);

  isFormOpen = signal<boolean>(false);

  productEditable = signal<ProductModel | undefined>(undefined);
  productIdToDelete = signal<number | undefined>(undefined);


  openForm() {
    this.productEditable.set(undefined);
    this.isFormOpen.set(true);
  }

  closeForm() {
    this.isFormOpen.set(false);
  }

  editProduct(product: ProductModel) {
    this.productEditable.set(product);
    this.isFormOpen.set(true);
  }

  confirmDelete(productId: number) {
    this.productIdToDelete.set(productId);
  }

  cancelDelete() {
    this.productIdToDelete.set(undefined);
  }

  deleteProduct() {
    const id = this.productIdToDelete();
    if (id !== undefined) {
      this._productStore.removeProduct(id);
      this._toastService.show('product.productDeleted');
      this.productIdToDelete.set(undefined);
    }
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
