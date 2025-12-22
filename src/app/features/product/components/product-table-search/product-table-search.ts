import { Component, output } from '@angular/core';

@Component({
  selector: 'app-product-table-search',
  imports: [],
  templateUrl: './product-table-search.html',
  styleUrl: './product-table-search.css',
})
export class ProductTableSearch {

  searchOutput= output();

  searchChanged(e:any){
    this.searchOutput.emit(e.target.value);
  }

}
