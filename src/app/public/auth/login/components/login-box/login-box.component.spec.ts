import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { LoginBoxComponent } from './login-box.component';
import { AuthService } from '../../../../../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { SharedModule } from '../../../../../core/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('LoginBoxComponent', () => {
  let component: LoginBoxComponent;
  let fixture: ComponentFixture<LoginBoxComponent>;
  let authService: jasmine.SpyObj<AuthService>;
  let toastrService: jasmine.SpyObj<ToastrService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    authService = jasmine.createSpyObj('AuthService', ['login']);
    toastrService = jasmine.createSpyObj('ToastrService', ['error']);
    router = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [LoginBoxComponent],
      providers: [
        { provide: AuthService, useValue: authService },
        { provide: ToastrService, useValue: toastrService },
        { provide: Router, useValue: router }
      ],
      imports: [SharedModule,BrowserAnimationsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display error if name or password is empty', () => {
    component.login();
    expect(toastrService.error).toHaveBeenCalledWith('Todos los campos son obligatorios', 'Error');
  });

  it('should call login API and navigate to intranet on successful login', fakeAsync(() => {
    const response = { token: 'token', userId: '123' };
    authService.login.and.returnValue(of(response));

    component.name = 'username';
    component.password = 'password';
    component.login();

    expect(authService.login).toHaveBeenCalledWith({ name: 'username', password: 'password', active: true });
    tick();
    expect(localStorage.getItem('token')).toBe('token');
    expect(localStorage.getItem('userId')).toBe('123');
    expect(router.navigate).toHaveBeenCalledWith(['/intranet']);
  }));

  it('should display error message on login failure', fakeAsync(() => {
    const error = new Error('Login failed');
    authService.login.and.returnValue(throwError(error));

    component.name = 'username';
    component.password = 'password';
    component.login();

    expect(authService.login).toHaveBeenCalledWith({ name: 'username', password: 'password', active: true });
    tick();
    expect(toastrService.error).toHaveBeenCalledWith('Login failed', 'Error');
  }));
});
