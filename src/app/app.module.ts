import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListGameComponent } from './list-game/list-game.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AddGameComponent } from './add-game/add-game.component';
import { GameDetailComponent } from './game-detail/game-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListGameComponent,
    TopBarComponent,
    AddGameComponent,
    GameDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
