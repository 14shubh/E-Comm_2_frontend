import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ProfileComponent } from './profile/profile.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { SigninComponent } from './signin/signin.component';
import { CategoryComponent } from './category/category.component';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [

 {
  path:'',
  component:AdminComponent,
  children:[
    {
      path:'',
      component:SigninComponent
    },
    {
      path:'dashboard',
      component:HomeComponent,
      canActivate:[AuthGuard]
    },
    {
      path:'category',
      component:CategoryComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'add-product',
      component:AddProductsComponent
    },
    {
      path:'products',
      component:AllProductsComponent
    },
    {
      path:'profile',
      component:ProfileComponent
    },
    {
      path:'sign-in',
      component:SigninComponent
    },
    {
      path:'**',
      component:ErrorpageComponent
    }
  ]

 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
