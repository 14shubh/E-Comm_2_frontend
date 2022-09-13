import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }
  public TokenCheck(){
    return !!sessionStorage.getItem('auth-token');
  }
}
