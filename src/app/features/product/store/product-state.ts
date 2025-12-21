import { ProductModel } from "../models/product-model";

type ProductKey = keyof ProductModel ;

export interface ProductState {
  data : ProductModel[];

  searchQuery : string;
  categoriesSelected : number[];
  sortBy : ProductKey;
  sortOrder : "asc" | "desc";
  page : number;
  pageSize : number;
}
