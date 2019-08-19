import { Component, OnInit, Input} from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('homeState', [
      state('HOME', style({
        'font-size': '30px'
      })),
      transition('* => HOME', animate('500ms')),
    ])
  ]
})

export class HomeComponent implements OnInit {

  @Input() contentState: string;

  constructor() { }

  ngOnInit() {
  }

}
