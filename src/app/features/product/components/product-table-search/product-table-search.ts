import { Component, output, viewChild, ElementRef, Signal } from '@angular/core';

@Component({
  selector: 'app-product-table-search',
  imports: [],
  templateUrl: './product-table-search.html',
  styleUrl: './product-table-search.css',
})
export class ProductTableSearch {

  searchOutput= output<string>();

  searchInputViewChild:Signal<ElementRef<HTMLInputElement>|undefined> = viewChild<ElementRef<HTMLInputElement>>('search');

  searchChanged(e:any){
    this.searchOutput.emit(e.target.value);
  }

  clearSearchInput(){
    this.searchOutput.emit("");
    this.searchInputViewChild()!.nativeElement.value = "";
  }

}
