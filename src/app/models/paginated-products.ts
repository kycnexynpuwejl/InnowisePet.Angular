import {IProduct} from "./product.model";

export interface PaginatedProducts {
  paginatedProducts: IProduct[]
  productCount: number
}
