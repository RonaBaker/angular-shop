import { Directive, Input, HostListener, Output, EventEmitter} from '@angular/core';

@Directive({
  selector: '[appConfirmation]'
})
export class ConfirmationDirective {
  @Input('appConfirmation') message: string; 
  @Output('appConfirmation') response = new EventEmitter();

  constructor() { }

  @HostListener('click') showMessage() {
    const res = window.prompt(this.message);
    if (res !== null) {
      this.response.emit(res);
    }
  }

}
