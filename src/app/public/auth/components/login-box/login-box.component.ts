import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../core/api/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { User } from '../../../../core/models/user.model';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrl: './login-box.component.scss'
})
export class LoginBoxComponent implements OnInit{
  name: string = '';
  password: string = '';
  loading: boolean = false;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login(): void {
    if (!this.name || !this.password) {
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return;
    }

    const user: User = {
      name: this.name,
      password: this.password,
      active: true,
    };

    this.authService.login(user).subscribe(
      (response: any) => {
        const { token, userId } = response;
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
        this.router.navigate(['/private']);
      },
      (error: any) => {
        this.toastr.error('Login failed', 'Error');
        console.log(error)
      }
    );
  }
}
