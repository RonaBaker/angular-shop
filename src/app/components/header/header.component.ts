import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { CartService} from '../../services/cart.service';
import { PaymentService} from '../../services/payment.service';
import { LoginService } from '../../services/login.service';
import { LanguageService } from '../../services/language.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() isOpen = new EventEmitter();
  languages: string[];
  activeLang: string;
  noCartItems: number;
  subscription: Subscription;

  constructor(private paymentService: PaymentService, 
              private loginService: LoginService,
              private languageService: LanguageService,
              private router: Router) {
                this.subscription = paymentService.countItems.subscribe(cnt => this.noCartItems = cnt);
               }

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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
