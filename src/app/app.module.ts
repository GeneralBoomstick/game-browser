import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { HttpClientModule } from "@angular/common/http";
import { GameCardComponent } from "./components/game-card/game-card.component";
import { LazyLoadImageModule } from "ng-lazyload-image";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GameCardComponent,
  ],
  imports: [BrowserModule, HttpClientModule, LazyLoadImageModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
