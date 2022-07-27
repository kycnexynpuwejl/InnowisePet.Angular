import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { IProduct } from '../models/product.model';
import {PaginatedProducts} from "../models/paginated-products";
import {FilterModel} from "../models/filter.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(filter: FilterModel): Observable<PaginatedProducts>{
    return this.http.post<PaginatedProducts>('https://localhost:7001/api/product/filter', filter);
  }

  getProductById(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`https://localhost:7001/api/product/${id}`)
  }

  // getProductsByCategoryId(id: string, pageSize: number, pageNumber: number, search: string): Observable<PaginatedProducts> {
  //   return this.http.get<PaginatedProducts>(`https://localhost:7001/api/product/category/${id}?pagesize=${pageSize}&pagenumber=${pageNumber}&search=${search}`)
  // }
}
