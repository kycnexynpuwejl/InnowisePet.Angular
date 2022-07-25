import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IProductStorage} from "../models/product-storage.model";

@Injectable({
  providedIn: 'root'
})
export class ProductStorageService {

  constructor(private http: HttpClient) { }

  getProductStorages(id: string): Observable<IProductStorage[]> {
    return this.http.get<IProductStorage[]>('https://localhost:7001/api/productstorage/product/' + id)
  }
}
