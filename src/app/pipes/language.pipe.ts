import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Pipe({
  name: 'language'
})
export class LanguagePipe implements PipeTransform {

  constructor(private languageService: LanguageService) {}

  transform(value: any, lang: string, type: string,): string {
    if (!this.languageService.providedLanguages.find(l => l === lang)) {
      return value; // No changes
    }
    if (this.languageService.getLocalString(type) === undefined) { // No such type
      return value;
    }
    return this.languageService.getLocalString(type);
  }

}
