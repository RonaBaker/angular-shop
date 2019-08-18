import { Component, OnInit, ContentChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-social-tab',
  templateUrl: './social-tab.component.html',
  styleUrls: ['./social-tab.component.css']
})
export class SocialTabComponent implements OnInit {

  @ContentChildren('tab') tabs: QueryList<ElementRef>;
  constructor() { }

  ngOnInit() {

  }
  ngAfterContentInit() {
    this.tabs.forEach(tab => {tab.nativeElement.target = "_blank"});
  }

}
