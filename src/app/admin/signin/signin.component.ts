import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { Admin } from '../../model/admin'
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  admin:Admin = new Admin('','');
  constructor(private _admin:AdminService, private _router:Router) { }

  public SignIn(){
    this._admin.login(this.admin).subscribe((data)=>{
      if(data['message'] == 'success'){
        sessionStorage.setItem('admin-info',JSON.stringify(data['result'].name));
        sessionStorage.setItem('auth-token',data['token']);
        this._router.navigate(['admin/dashboard']);
      }else{
        console.log('user not found');
      }
    })
  }
  ngOnInit(): void {
  }

}
