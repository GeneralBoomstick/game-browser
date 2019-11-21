import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Game } from "../models/game";

@Injectable({
  providedIn: "root"
})
export class GameInfoService {
  rawg_url: string = environment.rawg_url;
  constructor(private http: HttpClient) {}

  getGamesList(page?: number): Observable<any> {
    return this.http.get(this.rawg_url + "games");
  }

  getGameDetails(id: number): Observable<any>{
    return this.http.get(this.rawg_url + "games/"+id);
  }
}
