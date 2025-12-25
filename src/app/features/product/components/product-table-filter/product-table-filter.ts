import { required } from '@angular/forms/signals';
import { CategoryModel } from './../../models/category-model';
import { Component, Input, input, output, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-product-table-filter',
  imports: [TranslateModule],
  templateUrl: './product-table-filter.html',
  styleUrl: './product-table-filter.css',
})
export class ProductTableFilter {

  categories = input<CategoryModel[]>();

  categoriesSelected = input<number[]>();

  categorySelected = output<number>();

  selectCategory(categoryId:number){
    this.categorySelected.emit(categoryId);
  }

}
