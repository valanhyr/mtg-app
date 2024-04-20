import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';
import { MainBoardComponent } from './main-board/main-board.component';

const routes: Routes = [
  { path: '', component: PrivateComponent, children: [
    { path: '', redirectTo: 'main', pathMatch: 'full'},
    { path: 'main', component: MainBoardComponent},
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
