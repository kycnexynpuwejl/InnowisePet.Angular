import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any>{
    return this.http.post<any>('https://localhost:7000/api/auth/login', {username: username, password: password});
  }

  signup(username: string, password: string) {
    return this.http.post<any>('https://localhost:7000/api/auth/register', {username: username, password: password});
  }
}
