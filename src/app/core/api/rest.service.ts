import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http: HttpClient) {}

  get<T>(url: string, params?: any): Observable<T> {
    let httpParams = new HttpParams();
    if (params) {
      for (const key in params) {
        if (params.hasOwnProperty(key)) {
          httpParams = httpParams.append(key, params[key]);
        }
      }
    }
    return this.http.get<ApiResponse<T>>(url, { params: httpParams }).pipe(
      map(response => {
        if (response.success) {
          return response.data;
        } else {
          throw new Error(response.message);
        }
      })
    );
  }

  getById<T>(url: string, id: string): Observable<T> {
    return this.http.get<ApiResponse<T>>(`${url}/${id}`).pipe(
      map(response => {
        if (response.success) {
          return response.data;
        } else {
          throw new Error(response.message);
        }
      })
    );
  }

  post<T>(url: string, payload: T): Observable<T> {
    return this.http.post<ApiResponse<T>>(url, payload).pipe(
      map(response => {
        if (response.success) {
          return response.data;
        } else {
          throw new Error(response.message);
        }
      })
    );
  }

  put<T>(url: string, id: string, payload: T): Observable<T> {
    return this.http.put<ApiResponse<T>>(`${url}/${id}`, payload).pipe(
      map(response => {
        if (response.success) {
          return response.data;
        } else {
          throw new Error(response.message);
        }
      })
    );
  }

  delete<T>(url: string, id: string): Observable<void> {
    return this.http.delete<ApiResponse<void>>(`${url}/${id}`).pipe(
      map(response => {
        if (response.success) {
          return;
        } else {
          throw new Error(response.message);
        }
      })
    );
  }
}

