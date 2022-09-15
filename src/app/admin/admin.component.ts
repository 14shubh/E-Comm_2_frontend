import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  adminName:string|any;
  isDisabled:boolean = true;
  constructor(private _router:Router) { }

  public IsLoggedIn(){
    if(!sessionStorage.getItem('auth-token')){
      return false;
    }else{
      return true;
    }
  }

  public SignOut(){
    sessionStorage.removeItem('auth-token');
    sessionStorage.removeItem('admin-info');
    this._router.navigate(['admin/sign-in']);
  }
  ngOnInit(): void {


  }
  ngDoCheck(): void{
    this.adminName = sessionStorage.getItem('admin-info');
  }

}

