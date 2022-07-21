import { IProduct } from "./product.model"

export interface ICategory {
    id: string
    title: string
    products: IProduct[]
}
