import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { SharedModule } from '../core/shared/shared.module';
import { MainBoardComponent } from './main-board/main-board.component';
import { SliderComponent } from '../core/shared/components/slider/slider.component';
import { TournamentMainComponent } from './tournament/tournament-main/tournament-main.component';
import { CardsComponent } from './cards/cards.component';


@NgModule({
  declarations: [
    PrivateComponent,
    MainBoardComponent,
    SliderComponent,
    TournamentMainComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
