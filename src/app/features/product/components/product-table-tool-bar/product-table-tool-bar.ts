import { Component, computed, inject, input, output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../../../core/i18n/service/language.service';

interface PageSelectionOption {
  label: string;
  value: number;
}

@Component({
  selector: 'app-product-table-tool-bar',
  imports: [TranslateModule],
  templateUrl: './product-table-tool-bar.html',
  styleUrl: './product-table-tool-bar.css',
})
export class ProductTableToolBar {
  private readonly _languageService = inject(LanguageService);

  isRTL = this._languageService.isRTL;

  pageSelectionOptions: PageSelectionOption[] = [
    {
      label: "product.table.pagination.10perPage",
      value: 10
    },
    {
      label: "product.table.pagination.25perPage",
      value: 25
    },
    {
      label: "product.table.pagination.50perPage",
      value: 50
    },
    {
      label: "product.table.pagination.100perPage",
      value: 100
    }
  ]


  pageSizeSelected = output<number>();
  pageSelected = output<number>();

  pageCount = input<number>(1);

  currentPage = input<number>();

  pageSize = input<number>(10);

  productCount= this.pageCount() * this.pageSize()

  get pageArray(){
    return Array.from({ length: this.pageCount() }, (_, i) => i + 1);
  }

  selectPageSize(e:any){
    this.pageSizeSelected.emit(e.target.value);
  }

  selectPage(pageIndex:number){
    this.pageSelected.emit(pageIndex);
  }

  previousPage(){
    const current :number = this.currentPage() ?? 1
    const previosIndex = current - 1
    this.pageSelected.emit(previosIndex);
  }

  nextPage(){
    const current :number = this.currentPage() ?? 1
    const next = current + 1
    this.pageSelected.emit(next);
  }

}
