import { Component, OnInit, Input} from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  @Input() contentState: string;

  constructor() { }

  ngOnInit() {
  }

}
