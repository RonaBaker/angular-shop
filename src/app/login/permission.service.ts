import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  permission = [{
    username: 'user',
    hasPermission: false
  },
  {
    username: 'admin',
    hasPermission: true
  }]  
  constructor() { }

  isPermitted(username: string) {
    if (this.permission.find(u => u.username === username).hasPermission) {
      return true;
    }
    return false;
  }
}
