import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from './containers/hero-list/hero-list.component';
import { HeroDetailComponent } from './containers/hero-detail/hero-detail.component';
import { HeroNewComponent } from './containers/hero-new/hero-new.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: HeroListComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'new', component: HeroNewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroRoutingModule {}
