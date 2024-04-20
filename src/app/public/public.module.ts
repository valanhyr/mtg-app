import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { LoginComponent } from './auth/containers/login/login.component';
import { SharedModule } from '../core/shared/shared.module';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../core/services/auth.service';


@NgModule({
  declarations: [
    PublicComponent,
    LoginComponent
  ],
  imports: [
    SharedModule,
    PublicRoutingModule,
    CommonModule,
  ],
  exports: [],
  providers: [AuthService, ToastrService],
})
export class PublicModule { }
