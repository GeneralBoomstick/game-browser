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
  apiKey: string = environment.rawg_api_key;
  baseUrl: string = environment.rawg_api_url;
  constructor(private http: HttpClient) {}

  getGamesList(page?: number): Observable<any> {
    let apiHeaders: HttpHeaders = new HttpHeaders({
      "x-rapidapi-key": this.apiKey
    });
    const requestOptions = {
      headers: apiHeaders
    };
    return page ? this.http.get(this.baseUrl + "games?page=" + page, requestOptions) : this.http.get(this.baseUrl + "games?page=1", requestOptions);
  }
}
