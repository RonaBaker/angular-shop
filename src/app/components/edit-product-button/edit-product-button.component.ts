import { LoginService } from 'src/app/services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-product-button',
  templateUrl: './edit-product-button.component.html',
  styleUrls: ['./edit-product-button.component.css']
})
export class EditProductButtonComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  isPermitted() {
    if (this.loginService.isLoggedIn() && this.loginService.hasPermission()) {
      return true;
    }
  }

}
