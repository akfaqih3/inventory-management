import { Component } from '@angular/core';
import { ProductTable } from "../../components/product-table/product-table";

@Component({
  selector: 'app-product-list-page',
  imports: [ProductTable],
  templateUrl: './product-list-page.html',
  styleUrl: './product-list-page.css',
})
export class ProductListPage {

}
