import { Component, OnInit, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {

@Input() totalItems: number;

  // totalItems: number = 10;
  // totalItems = 30;

  className: string = 'a1';

  constructor() {
    console.log('App - constructor');
  }

  ngDoCheck() {
    console.log('App - ngDoCheck');
  }

  ngOnInit() {
    console.log('App - ngOnInit');
  }

}
