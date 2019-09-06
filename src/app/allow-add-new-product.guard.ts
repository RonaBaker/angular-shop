import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { PermissionService } from './services/permission.service';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AllowAddNewProductGuard implements CanActivate {
  
  constructor(private loginService: LoginService, private route: Router) {}

  canActivate() {
    if (!this.loginService.isLoggedIn() || !this.loginService.hasPermission()) {
        this.route.navigate(['/permission-denied']);
        return false;
  } 
  return true;
  }
}






