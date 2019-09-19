import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { LoginService } from '../../login/login.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() content = new EventEmitter();
  constructor(private loginService: LoginService, private languageService: LanguageService) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.content.emit();
  }

  isPermitted() {
    if (this.loginService.isLoggedIn() && this.loginService.hasPermission()) {
      return true;
    }
  }

  get defaultLang() {
    return this.languageService.defaultLanguage.language;
  }

}
