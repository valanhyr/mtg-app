import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './core/shared/guards/auth.guard';

const routes: Routes = [
  { path: '', component: AppComponent, children: [
    { path: '', redirectTo: 'public', pathMatch: 'full'},
    { path: 'public', loadChildren: ()=> import('./public/public.module').then(m => m.PublicModule)},
    { path: 'intranet', loadChildren: ()=> import('./intranet/intranet.module').then(m => m.IntranetModule), canActivate: [AuthGuard] }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
