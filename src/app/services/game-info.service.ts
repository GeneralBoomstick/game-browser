import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Game } from "../models/game";
import { Genre } from "../models/genre";
import { Platform } from "../models/platform";

@Injectable({
  providedIn: "root"
})
export class GameInfoService {
  rawg_url: string = environment.rawg_url;
  constructor(private http: HttpClient) {}

  getGamesList(page?: number): Observable<Game[]> {
    return this.http.get(this.rawg_url + "games").pipe(
      map(res => {
        if (Array.isArray(res['results'])) {
          return res['results'].map(item => {
            let genres: Genre[] = item.genres.map(item => {
              let genre: Genre = new Genre(item.id,item.name, item.slug);
              return genre;
            });
            let platforms: Platform[] = item.parent_platforms.map(item => {
              let platform: Platform = new Platform(item.id, item.name, item.slug);
              return platform;
            });
            let screenshots: string[] = item.short_screenshots.map(
              item => item.image
            );

            return new Game(
              item.id,
              item.slug,
              item.name,
              item.background_image,
              item.rating,
              item.metacritic,
              platforms,
              genres,
              screenshots
            );
          });
        } else {
          return [];
        }
      })
    );
  }

  getGameDetails(id: number): Observable<any> {
    return this.http.get(this.rawg_url + "games/" + id);
  }
}
