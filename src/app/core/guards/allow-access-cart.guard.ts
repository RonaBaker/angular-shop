import { Injectable } from '@angular/core';
import { Router, CanActivate} from '@angular/router';
import { LoginService } from '../../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AllowAccessCartGuard implements CanActivate {
  constructor(private loginService: LoginService, private route: Router) {}
  canActivate() {
    console.log('fsdfsdf');
      if (!this.loginService.isLoggedIn()) {
        this.route.navigate(['/login']);
      }
      return true;
  }
}
