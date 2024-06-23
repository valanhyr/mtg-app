import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';
import { MainBoardComponent } from './main-board/main-board.component';
import { CardsComponent } from './cards/cards.component';

const routes: Routes = [
  { path: '', component: PrivateComponent, children: [
    { path: '', redirectTo: 'main', pathMatch: 'full'},
    { path: 'main', component: MainBoardComponent},
    { path: 'tournament/:id', loadChildren: () => import('./tournament/tournament-main/tournament-main.component')
      .then(m => m.TournamentMainComponent) },
    { path: 'cards', component:CardsComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
