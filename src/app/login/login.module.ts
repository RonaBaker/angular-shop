import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    RouterModule.forChild([{ path: 'login', component: LoginComponent }]),
    CommonModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
