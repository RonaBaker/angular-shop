import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() content = new EventEmitter();

  menu: string[];
  constructor() { }

  ngOnInit() {
    this.menu = ['HOME', 'ABOUT', 'PRODUCTS', 'CONTACT'];
  }

  changeContent(val: string) {
    this.content.emit(val);
  }

}
