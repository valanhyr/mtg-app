import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { AddTokenInterceptor } from './utils/add-token.interceptor';
// Angular material
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LoginBoxComponent } from '../../public/auth/components/login-box/login-box.component';
import { FooterComponent } from './components/footer/footer.component';
import { RankComponent } from './components/data-display/rank/rank.component';
import { BannerComponent } from './components/data-display/banner/banner.component';
import { CarrouselComponent } from './components/data-display/carrousel/carrousel.component';
import { TournamentsInfoComponent } from './components/data-display/tournaments-info/tournaments-info.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    NavbarComponent,
    LoginBoxComponent,
    FooterComponent,
    BannerComponent,
    CarrouselComponent,
    RankComponent,
    TournamentsInfoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    RouterModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatIconModule,
    MatToolbarModule,
  ],
  exports: [
    // Componnents
    NavbarComponent,
    // Modules
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule,
    RouterModule,

    SpinnerComponent,
    NavbarComponent,
    LoginBoxComponent,
    FooterComponent,
    BannerComponent,
    CarrouselComponent,
    RankComponent,

    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    TournamentsInfoComponent
  ],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true }
  ]
})
export class SharedModule { }
