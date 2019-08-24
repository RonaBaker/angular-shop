import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contentState: string;
  email: string;
  subject: string;
  message: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    /* sending the request to the server with email, subject and message  */
    console.log("Your details have been sent");
  }

}
