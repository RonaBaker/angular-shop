import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { LoginService } from '../services/login.service';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() content = new EventEmitter();

  menu: string[];
  constructor(private loginService: LoginService, private languageService: LanguageService) { }

  ngOnInit() {
  }

  changeContent(val: string) {
    this.content.emit(val);
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
