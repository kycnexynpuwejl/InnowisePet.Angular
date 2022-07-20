import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDetails } from '../components/product-details/product-details.model';
import { ProductList } from '../components/product-list/product-list.model';

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

  getProductCountFromStorages(id: string): Observable<number> {
    return this.http.get<number>('https://localhost:7001/api/productstorage/product/' + id)
  }
}
