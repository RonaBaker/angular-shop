import { Injectable } from '@angular/core';
import { User } from '../core/model/user';
import { PermissionService } from './permission.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedIn = false;
  activeUser: string;
  users: User[] = [{
    username: 'user',
    password: 'user'
  },
  {
    username: 'admin',
    password: 'admin'
  }
]
  constructor(private permissionServise: PermissionService) { }

  isValid(username: string, password: string) {
    const index = this.users.findIndex((u => u.username === username));
    if (index === -1) { // Check if user exists
      return false;
    }
    if (this.users[index].password !== password) {
      return false;
    }
    this.loggedIn = true;
    this.activeUser = username;
    return true;
  }

  isLoggedIn() {
    if (this.loggedIn) {
      return true;
    }
    return false;
  }

  logout() {
    this.loggedIn = false;
  }

  hasPermission() {
    if (this.permissionServise.isPermitted(this.activeUser)) {
      return true;
    }
    return false;
  }

  getUsers() {
    return this.users;
  }
}
