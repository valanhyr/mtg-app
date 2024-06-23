import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private apiUrl: string;

  constructor(private http: HttpClient) { 
    this.apiUrl = `${environment.scryfall_endpoint}/cards`;
  }

  searchCards(query: string): Observable<any> {
    let params = new HttpParams().set('q', query);
    return this.http.get<any>(`${this.apiUrl}/search`, { params });
  }

  getCardByName(name: string): Observable<any> {
    let params = new HttpParams().set('fuzzy', name);
    return this.http.get<any>(`${this.apiUrl}/named`, { params });
  }

  autocomplete(query: string): Observable<any> {
    let params = new HttpParams().set('q', query);
    return this.http.get<any>(`${this.apiUrl}/autocomplete`, { params });
  }

  getRandomCard(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/random`);
  }

  getCollection(identifiers: any[]): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/collection`, { identifiers });
  }

  getCardByCode(code: string, number: string, lang: string = ''): Observable<any> {
    let url = `${this.apiUrl}/${code}/${number}`;
    if (lang) {
      url += `/${lang}`;
    }
    return this.http.get<any>(url);
  }

  getCardByMultiverseId(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/multiverse/${id}`);
  }

  getCardByMtgoId(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/mtgo/${id}`);
  }

  getCardByArenaId(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/arena/${id}`);
  }

  getCardByTcgplayerId(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/tcgplayer/${id}`);
  }

  getCardByCardmarketId(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/cardmarket/${id}`);
  }

  getCardById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

}
