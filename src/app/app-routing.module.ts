import { AdminComponent } from './admin/admin.component';
// import { AdminModule } from './admin/admin.module';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './user/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:UserComponent,
    children:[
      {
        path: '',
        component: HomeComponent
      }
    ]
  },
  {
    path:'admin',
    loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
