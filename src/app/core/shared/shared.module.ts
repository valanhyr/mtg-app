import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginBoxComponent } from '../../public/auth/login/components/login-box/login-box.component';
import { ToastrModule } from 'ngx-toastr';
import { SpinerComponent } from './components/spiner/spiner.component';
import { AddTokenInterceptor } from './interceptor/add-token.interceptor';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,

    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    RouterModule,
  ],
  declarations: [
    LoginBoxComponent, 
    SpinerComponent, 
    UppercasePipe,
    CapitalizePipe,
    NavbarComponent
  ],
  exports: [
    HttpClientModule,
    LoginBoxComponent,
    NavbarComponent,
    SpinerComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    ToastrModule,
    RouterModule,
    UppercasePipe,
    CapitalizePipe
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true }
  ],
})
export class SharedModule {
  constructor() {}
}
