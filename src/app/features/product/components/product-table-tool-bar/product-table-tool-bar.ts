import { Component, input, output } from '@angular/core';

interface PageSelectionOption {
  label: string;
  value: number;
}

@Component({
  selector: 'app-product-table-tool-bar',
  imports: [],
  templateUrl: './product-table-tool-bar.html',
  styleUrl: './product-table-tool-bar.css',
})
export class ProductTableToolBar {

  pageSelectionOptions: PageSelectionOption[] = [
    {
      label: "10 per page",
      value: 10
    },
    {
      label: "25 per page",
      value: 25
    },
    {
      label: "50 per page",
      value: 50
    },
    {
      label: "100 per page",
      value: 100
    }
  ]

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.pageCount());
  }

  pageSizeSelected = output<number>();
  pageSelected = output<number>();

  pageCount = input<number>(1);

  currentPage = input<number>();

  pageSize = input<number>();

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
