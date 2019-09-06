import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, Router} from '@angular/router';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AllowAccessCartGuard implements CanActivate {
  constructor(private loginService: LoginService, private route: Router) {}
  canActivate() {
      if (!this.loginService.isLoggedIn()) {
        this.route.navigate(['/login']);
      }
      return true;
  }
}
