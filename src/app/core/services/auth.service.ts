import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../../src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.endpoint}api/users`;
  }
  login(user: User): Observable<any> {
    return this.http.post<string>(`${this.apiUrl}/login`, user);
  }
  /*login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials)
      .pipe(
        catchError((error: any) => {
          return throwError(error);
        })
      );
  }

  signup(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signup`, user)
      .pipe(
        catchError((error: any) => {
          return throwError(error);
        })
      );
  }*/
}
