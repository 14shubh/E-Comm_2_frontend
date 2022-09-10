import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

 {
  path:'',
  component:AdminComponent,
  children:[
    {
      path:'',
      component:HomeComponent
    },
    {
      path:'add-category',
      component:AddcategoryComponent
    }
  ]

 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
