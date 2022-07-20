import { ProductList } from "../product-list/product-list.model"

export interface CategoryDetails {
    id: string
    title: string
    products: Array<ProductList>
}
