import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';

import {
  LoginComponent
} from './login.component';

import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    LoginRoutingModule,
    ButtonModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
  ]
})

export class LoginModule { }
