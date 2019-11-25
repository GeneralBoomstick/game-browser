import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { HttpClientModule } from "@angular/common/http";
import { GameCardComponent } from "./components/game-list/game-card/game-card.component";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GameListComponent } from './components/game-list/game-list.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GameCardComponent,
    GameListComponent,
    SearchComponent,
  ],
  imports: [BrowserModule, HttpClientModule, LazyLoadImageModule, FontAwesomeModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
