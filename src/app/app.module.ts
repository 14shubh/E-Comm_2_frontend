import { TokenIntercepterService } from './services/token-intercepter.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { NavbarComponent } from './user/navbar/navbar.component';
import { HomeComponent } from './user/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenIntercepterService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
