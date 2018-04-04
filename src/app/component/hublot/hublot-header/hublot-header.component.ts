import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-hublot-header',
  templateUrl: './hublot-header.component.html',
  styleUrls: ['./hublot-header.component.scss']
})
export class HublotHeaderComponent implements OnInit {

  myClass;
  constructor() { }

  @HostListener('window:scroll', ['$event'])
  updateHeaderStyles(event) {
    if (window.pageYOffset <= 0) {
      this.myClass = 'style2';
      console.log('Scroll Event', event);
    } else {
      this.myClass = 'style1';
    }
  }
  ngOnInit() {
  }

}
