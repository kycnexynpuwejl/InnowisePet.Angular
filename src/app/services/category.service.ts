import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../models/category.model'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<ICategory[]>{
    return this.http.get<ICategory[]>('https://localhost:7001/api/category')
  }

  getCategoryById(id: string): Observable<ICategory> {
    return this.http.get<ICategory>('https://localhost:7001/api/category/' + id)
  }

}
