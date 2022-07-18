import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDetails } from '../product-details/product-details.model';
import { ProductList } from '../product-list/product-list.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductList[]>{
    return this.http.get<ProductList[]>('https://localhost:7001/api/product')
  }

  getProductById(id: string): Observable<ProductDetails> {
    return this.http.get<ProductDetails>(`https://localhost:7001/api/product/${id}`)
  }
}
