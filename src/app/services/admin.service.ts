import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Admin } from '../model/admin'
@Injectable({
  providedIn: 'root'
})
export class AdminService{

  constructor(private _http:HttpClient) { }
  serverUrl = 'http://localhost:3000/admin';

  public login(admin:Admin):Observable<Admin>{
    let Apiurl = this.serverUrl+'/signin';
    return this._http.post<Admin>(Apiurl,admin);
  }
}
