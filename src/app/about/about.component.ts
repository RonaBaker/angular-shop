import { Component, OnInit, Input} from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('aboutState', [
      state('ABOUT', style({
        'font-size': '30px' 
      })),
      transition('* => ABOUT', animate('300ms')),
    ])
  ]
})
export class AboutComponent implements OnInit {

  @Input() contentState: string;
  constructor() { }

  ngOnInit() {
  }

}
