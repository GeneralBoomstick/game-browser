import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  showLinks: boolean;
  constructor() { }

  openDrawer() {
    this.showLinks = !this.showLinks;
  }

  ngOnInit() {
    if(window.screen.width >= 640){
      this.showLinks = true;
    } else {
      this.showLinks = false;
    }
  }

}
