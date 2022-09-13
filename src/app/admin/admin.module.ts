import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { SigninComponent } from './signin/signin.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';


@NgModule({
  declarations: [

    HomeComponent,
    CategoryComponent,
    SigninComponent,
    AddProductsComponent,
    AllProductsComponent,
    ProfileComponent,
    ErrorpageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
