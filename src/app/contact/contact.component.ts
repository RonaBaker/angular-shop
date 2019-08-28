import { Component, OnInit, Input} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contentState: string;
  confirmationMsg: string;
  userResponse: string;
  email: string;
  subject: string;
  message: string;
  form: NgForm;

  constructor() { }

  ngOnInit() {
    this.confirmationMsg = 'Are you sure?';
  }

  onConfirmation(form: NgForm) {
    console.log('User sent contact details');
    form.reset();
  }

}
