import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenIntercepterService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let tokenizRequest = req.clone({
      setHeaders:{
        authorization:'Bearar'+sessionStorage.getItem('admin-token')
      }
    })
    return next.handle(tokenizRequest);
  }
  constructor() { }
}
