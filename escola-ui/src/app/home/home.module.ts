import { MoneyHttp } from './../seguranca/money-http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './../seguranca/auth.service';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { JwtHelperService } from '@auth0/angular-jwt';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    HttpClientModule,
    RouterModule,

    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    AuthService,
    JwtHelperService,
    MoneyHttp
  ]
})
export class HomeModule { }
