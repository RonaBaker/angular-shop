import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() content = new EventEmitter();

  menu: string[] = ['HOME', 'ABOUT', 'PRODUCTS', 'CONTACT'];
  constructor() { }

  ngOnInit() {
  }

  changeContent(val: string) {
    this.content.emit(val);
  }

}
