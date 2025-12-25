import { ProductModel } from "../models/product-model";


export interface ProductState {
  data : ProductModel[];

  searchQuery : string;
  categoriesSelected : number[];
  sortBy : keyof ProductModel;
  sortOrder : "asc" | "desc";
  page : number;
  pageSize : number;
}
