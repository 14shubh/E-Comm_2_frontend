import { AuthenticateService } from './services/authenticate.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authToken:AuthenticateService, private _router:Router){}
  canActivate():boolean{
    if(this._authToken.TokenCheck()){
      return true;
    }else{
       this._router.navigate(['admin/sign-in']);
       return false;
    }
  }

}
