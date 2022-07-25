import { HttpClient } from '@angular/common/http';
import {Injectable, Input} from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';
import {PaginatedProducts} from "../models/paginated-products";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(pageSize: number, pageNumber: number, search: string): Observable<PaginatedProducts>{
    return this.http.get<PaginatedProducts>(`https://localhost:7001/api/product?pagesize=${pageSize}&pagenumber=${pageNumber}&search=${search}`)
  }

  getProductById(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`https://localhost:7001/api/product/${id}`)
  }

  getProductsByCategoryId(id: string, pageSize: number, pageNumber: number, search: string): Observable<PaginatedProducts> {
    return this.http.get<PaginatedProducts>(`https://localhost:7001/api/product/category/${id}?pagesize=${pageSize}&pagenumber=${pageNumber}&search=${search}`)
  }
}
