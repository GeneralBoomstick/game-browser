import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GameListComponent } from './components/game-list/game-list.component';

export const appRoutes: Routes = [
    { path: '', component: GameListComponent }
];