import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {
  @Input() game: Game;
  ratingArray: number[];
  defaultImage: string = "../../../assets/controller.png";
  constructor() { }

  ngOnInit() {
    let rating: number = this.game["rating"];
    this.ratingArray = Array(Math.floor(rating)).fill(0);
  }

}
