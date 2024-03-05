import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntranetComponent } from './intranet.component';

const routes: Routes = [
  { 
    path: '', 
    component: IntranetComponent, 
    children: [
      { path: '', redirectTo: 'heroes', pathMatch: 'full'},
      { path: 'heroes', loadChildren: ()=> import('./hero/hero.module').then(m=>m.HeroModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { 
  constructor(){ }
}
