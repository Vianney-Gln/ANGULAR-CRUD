import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGameComponent } from './add-game/add-game.component';
import { ListGameComponent } from './list-game/list-game.component';

const routes: Routes = [
  {path: '', component: ListGameComponent},
  {path: 'addGame', component: AddGameComponent},
  {path: 'gameDetail/:id', component: AddGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
