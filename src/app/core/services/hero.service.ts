import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../../src/environments/environment';
import { Hero } from '../models/hero.model';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.endpoint}api/heroes`;
  }

  getAllHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.apiUrl).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  getHeroById(heroId: string): Observable<Hero> {
    const url = `${this.apiUrl}/${heroId}`;
    return this.http.get<Hero>(url).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  createHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.apiUrl, hero).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  updateHero(hero: Hero): Observable<Hero> {
    const url = `${this.apiUrl}/${hero._id}`;
    return this.http.put<Hero>(url, hero).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  deleteHero(heroId: string): Observable<void> {
    const url = `${this.apiUrl}/${heroId}`;
    return this.http.delete<void>(url).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }
}
