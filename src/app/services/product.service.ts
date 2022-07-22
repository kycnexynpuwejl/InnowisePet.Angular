import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>('https://localhost:7001/api/product')
  }

  getProductById(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`https://localhost:7001/api/product/${id}`)
  }

  getProductsByCategoryId(id: string): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`https://localhost:7001/api/product/category/${id}`)
  }
}
