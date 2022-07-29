import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {defaults} from "autoprefixer";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authToken;

    try {
      authToken = localStorage.getItem('access_token') ? localStorage.getItem('access_token') : ''
    } catch {
      localStorage.clear();
    }


    if (authToken) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${authToken}`),
      });
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
