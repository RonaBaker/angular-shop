import { Injectable } from '@angular/core';
import languages from '../../assets/data/language.json';
import { Language } from '../model/language';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  providedLanguages = ['ENG', 'HEB'];
  languageArr: Language[]= languages;
  defaultLanguage = this.languageArr[0]; // default - English

  constructor() { }

  changeLanguage(language: string) {
    this.defaultLanguage = this.languageArr.find(l => l.language === language);
  }

  getLocalString(type: string) {
    return this.defaultLanguage[type];
  }

}
