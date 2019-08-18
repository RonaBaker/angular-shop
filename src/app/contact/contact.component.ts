import { Component, OnInit, Input} from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('contactState', [
      state('CONTACT', style({
        'font-size': '30px'
      })),
      transition('* => CONTACT', animate('300ms')),
    ])
  ]
})
export class ContactComponent implements OnInit {

  @Input() contentState: string;

  constructor() { }

  ngOnInit() {
  }

}
