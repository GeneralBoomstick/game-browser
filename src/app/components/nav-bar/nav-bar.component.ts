import { Component, OnInit } from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  showSearch: boolean;
  faSearch = faSearch;
  constructor() { }

  openDrawer() {
    this.showSearch = !this.showSearch;
  }

  ngOnInit() {
    this.showSearch = false;
  }

}
