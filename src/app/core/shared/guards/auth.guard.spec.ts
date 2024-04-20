import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ToastrService } from 'ngx-toastr'; // Import ToastrService
import { SharedModule } from '../shared.module';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule],
      providers: [AuthGuard, ToastrService]
    });
    guard = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow access when user has a valid token', () => {
    spyOn(localStorage, 'getItem').and.returnValue('validToken');

    const canActivate = guard.canActivate(null as any, null as any);

    expect(canActivate).toBe(true);
  });

  it('should redirect login when user does not have a valid token', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);
    const navigateSpy = spyOn(router, 'navigate');

    const canActivate = guard.canActivate(null as any, null as any); 

    expect(canActivate).toBe(false);
    expect(navigateSpy).toHaveBeenCalledWith(['/']);
  });
});
