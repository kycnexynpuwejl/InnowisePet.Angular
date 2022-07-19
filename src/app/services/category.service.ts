import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryList } from '../components/category-list/category-list.model'
import { CategoryDetails } from '../components/category-details/category-details.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<CategoryList[]>{
    return this.http.get<CategoryList[]>('https://localhost:7001/api/category')
  }

  getCategoryById(id: string): Observable<CategoryDetails> {
    return this.http.get<CategoryDetails>('https://localhost:7001/api/category/' + id)
  }

}
