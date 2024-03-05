import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../core/shared/shared.module';
import { HeroRoutingModule } from './hero-routing.module';

import { HeroComponent } from './hero.component';
import { HeroListComponent } from './containers/hero-list/hero-list.component';
import { HeroNewComponent } from './containers/hero-new/hero-new.component';
import { HeroDetailComponent } from './containers/hero-detail/hero-detail.component';
import { HeroListTableComponent } from './components/hero-list/hero-list-table.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';

@NgModule({
  declarations: [
    HeroComponent,
    HeroListComponent,
    HeroNewComponent,
    HeroDetailComponent,
    HeroListTableComponent,
    HeroFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HeroRoutingModule
  ]
})
export class HeroModule { }

