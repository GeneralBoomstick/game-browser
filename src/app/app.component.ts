import { Component, OnInit } from '@angular/core';
import { GameInfoService } from './services/game-info.service';
import { Game } from './models/game';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  games: Game[];
  gameOne: Game;
  pageNumber: number;
  numDisplayed: number;
  totalGames: number;
  constructor(private gameInfoService: GameInfoService){}

  getDetails($event: any){
  }

  ngOnInit(){
    this.gameInfoService.getGamesList().subscribe(res => {
      this.games = res;
      console.log(this.games);
    });

  }
}
