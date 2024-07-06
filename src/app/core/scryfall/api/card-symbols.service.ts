import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardSymbolsService {
  private apiUrl = 'https://api.scryfall.com/symbology';

  constructor(private http: HttpClient) { }

  getCardSymbols(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
