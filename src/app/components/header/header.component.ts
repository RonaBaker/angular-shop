import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { CartService} from '../../services/cart.service';
import { PaymentService} from '../../services/payment.service';
import { LoginService } from '../../services/login.service';
import { LanguageService } from '../../services/language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() isOpen = new EventEmitter();
  languages: string[];
  activeLang: string;

  constructor(private cartService: CartService, 
              private paymentService: PaymentService, 
              private loginService: LoginService,
              private languageService: LanguageService,
              private router: Router) { }

  ngOnInit() {
    this.languages = this.languageService.providedLanguages;
    this.activeLang = this.languageService.defaultLanguage.language;
  }

  changeLang(lang: string) {
    this.languageService.changeLanguage(lang);
    this.activeLang = lang;
  }

  isLogin() {
     if (this.isLoggedIn()) {
       return 'logout';
     }
     return 'login';
  }

  onClickMenu() {
    this.isOpen.emit();
  }

  onClickCart() {
    this.router.navigate(['/cart']);
  }

  getNumCartItems() {
    return this.paymentService.getNumberItems();
  }

  loginView() {
    if (this.isLoggedIn()) {
      this.loginService.logout();
      this.router.navigate(['../']);
    }
    else {
      this.router.navigate(['/login']);
    }
  }

  isLoggedIn() {
    return this.loginService.isLoggedIn();
  }

}
