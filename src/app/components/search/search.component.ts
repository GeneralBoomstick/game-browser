import { Component, OnInit } from '@angular/core';
import { faSearch, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  faSearch = faSearch;
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;
  showOptions: Boolean = false;
  constructor() { }

  showFilterOptions() {
    this.showOptions = !this.showOptions;
  }

  ngOnInit() {
  }

}
