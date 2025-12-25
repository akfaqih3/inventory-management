import { Component, input, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { categoryMock } from '../../models/product-mock';
import { ProductModel } from '../../models/product-model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule, TranslateModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductForm {
  productForm!: FormGroup;
  productName!: FormControl;
  productCategory!: FormControl;
  productPrice!: FormControl;
  productQuantity!: FormControl;

  categories = categoryMock;

  newProduct = output<ProductModel>();

  closeForm = output<void>();

  productEditable = input<ProductModel>();

  constructor(){
    this.initFormControls();
    this.initFormGroup();

  }

  ngOnInit(): void {
    if(this.productEditable()){
      this.setEditable(this.productEditable()!);
    }
  }

  initFormGroup(){
    this.productForm = new FormGroup({
      name: this.productName,
      category: this.productCategory,
      price: this.productPrice,
      quantity: this.productQuantity
    });

  }

  initFormControls(){
    this.productName = new FormControl<string>('',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]);
    this.productCategory = new FormControl<number>(1,[Validators.required]);
    this.productPrice = new FormControl<number>(0,[Validators.required,Validators.min(1)]);
    this.productQuantity = new FormControl<number>(1,[Validators.required,Validators.min(0)]);
  }

  setEditable(product: ProductModel){
    this.productName.setValue(product.name);
    this.productCategory.setValue(product.categoryId);
    this.productPrice.setValue(product.price);
    this.productQuantity.setValue(product.quantity);
  }

  close(){
    this.closeForm.emit()
  }

  onSubmit(){
    this.productForm.markAllAsTouched();
    if(!this.productForm.valid){
      return;
    }
    const product = this.getProduct(this.productForm);
    this.newProduct.emit(product);
    this.productForm.reset();
    this.productEditable.apply(undefined);
    this.close();
  }

  getProduct(productForm: FormGroup): ProductModel{
    return {
      id: this.productEditable()?.id ?? this.generateId(),
      name: productForm.value.name,
      categoryId: Number(productForm.value.category),
      price: productForm.value.price,
      quantity: productForm.value.quantity,
      createdAt: this.productEditable()?.createdAt ?? new Date( Date.now() )
    }
  }

  generateId(){
    const id = Math.floor(Math.random() * 1000000);
    return id;
  }

}
