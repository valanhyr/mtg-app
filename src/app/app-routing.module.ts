import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './core/shared/guards/auth.guard';

const routes: Routes = [
  { path: '', component: AppComponent, children: [
    { path: '', redirectTo: 'public', pathMatch: 'full'},
    { path: 'public', loadChildren: ()=> import('./public/public.module').then(m => m.PublicModule)},
    { path: 'private', loadChildren: ()=> import('./private/private.module').then(m => m.PrivateModule), canActivate: [AuthGuard] },
    { path: 'admin', loadChildren: ()=> import('./admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard] }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
