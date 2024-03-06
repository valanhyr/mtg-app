import { TestBed } from '@angular/core/testing';
import { PublicModule } from './public.module';
import { SharedModule } from '../core/shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { LoginComponent } from './auth/login/containers/login/login.component';
import { AuthService } from '../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';

describe('PublicModule', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [SharedModule, PublicRoutingModule,PublicModule],
    providers: [AuthService, ToastrService]
  }));

  it('should create', () => {
    const module: PublicModule = TestBed.inject(PublicModule);
    expect(module).toBeTruthy();
  });

  it('should provide AuthService', () => {
    const authService: AuthService = TestBed.inject(AuthService);
    expect(authService).toBeTruthy();
  });

  it('should provide ToastrService', () => {
    const toastrService: ToastrService = TestBed.inject(ToastrService);
    expect(toastrService).toBeTruthy();
  });

  it('should declare PublicComponent', () => {
    const fixture = TestBed.createComponent(PublicComponent);
    expect(fixture.componentInstance instanceof PublicComponent).toBe(true);
  });

  it('should declare LoginComponent', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    expect(fixture.componentInstance instanceof LoginComponent).toBe(true);
  });
});
