import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { SharedModule } from '../core/shared/shared.module';
import { MainBoardComponent } from './main-board/main-board.component';
import { SliderComponent } from './slider/slider.component';


@NgModule({
  declarations: [
    PrivateComponent,
    MainBoardComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
