import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntranetRoutingModule } from './intranet-routing.module';
import { ToastrService } from 'ngx-toastr';
import { HeroService } from '../core/services/hero.service';
import { SharedModule } from '../core/shared/shared.module';
import { NavbarComponent } from '../core/shared/components/navbar/navbar.component';

@NgModule({
  declarations: [],
  imports: [SharedModule, CommonModule, IntranetRoutingModule],
  exports: [],
  providers: [HeroService, ToastrService],
})
export class IntranetModule {}
