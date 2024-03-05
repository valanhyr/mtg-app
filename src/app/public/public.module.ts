import { NgModule } from '@angular/core';
import { SharedModule } from '../core/shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { LoginComponent } from './auth/login/containers/login/login.component';
import { AuthService } from '../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@NgModule({
  imports: [SharedModule, PublicRoutingModule],
  declarations: [PublicComponent, LoginComponent],
  exports: [],
  providers: [AuthService, ToastrService],
})
export class PublicModule {
  constructor() {}
}
