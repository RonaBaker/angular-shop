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

  onSubmit(form: NgForm) {
    /* sending the request to the server with email, subject and message  */
    //console.log("Your details have been sent");
    if (this.userResponse !== null) {
      form.reset();
    }
  }

  onConfirmation(res: string) {
    this.userResponse = res;
    console.log(`user response: ${res}`);
  }

}
