import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {
  @Input() game: Game;
  @Output() moreInfo = new EventEmitter<number>();
  ratingArray: number[];
  defaultImage: string = "../../../assets/controller.png";
  constructor() { }

  getDetails(){
    this.moreInfo.emit(this.game['id']);
  }

  ngOnInit() {
    let rating: number = this.game['rating'];
    this.ratingArray = Array(Math.floor(rating)).fill(0);
  }

}
