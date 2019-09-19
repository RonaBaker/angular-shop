import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpCorrelationInterceptor } from './http-logging-interceptor';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpCorrelationInterceptor, multi: true }],})
export class CoreModule { }
