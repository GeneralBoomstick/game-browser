import { Component, OnInit } from '@angular/core';
import { GameInfoService } from "../../services/game-info.service";
import { Game } from "../../models/game";

@Component({
  selector: 'game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: Game[];

  constructor(private gameInfoService: GameInfoService) { }

  getDetails($event: any) { }


  ngOnInit() {
    this.gameInfoService.getGamesList({exclude_additions: true, page_size: 20}).subscribe(res => {
      this.games = res;
    });
  }

}
