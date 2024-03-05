import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../../../../core/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.scss']
})
export class LoginBoxComponent implements OnInit {
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

    // Create request body
    const user: User = {
      name: this.name,
      password: this.password,
      active: true,
    };

    // Call API
    this.authService.login(user).subscribe(
      (response: any) => {
        const { token, userId } = response;
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
        this.router.navigate(['/intranet']);
      },
      (error: any) => {
        this.toastr.error('Login failed', 'Error');
      }
    );
  }
}
