import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  @Output() openHome = new EventEmitter
  isValid: boolean;

  constructor(private fb: FormBuilder, private loginService: LoginService) {
    this.loginForm = fb.group({
      username: '',
      password: ''
    })
   }

  ngOnInit() {
    this.isValid = false;
  }

  onSubmit() {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;
    if (this.loginService.isValid(username, password)) { // Valid username and password
        this.openHome.emit();
    }
    else {
      this.isValid = true;
    }

  }

}
