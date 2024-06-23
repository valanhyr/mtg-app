import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SetsService {
  private apiUrl: string;

  constructor(private http: HttpClient) { 
    this.apiUrl = `${environment.scryfall_endpoint}/sets`;
    
  }

  getAllSets() {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  getSetByCode(code: string) {
    return this.http.get<any>(`${this.apiUrl}/${code}`);
  }

  getSetByTcgplayerId(id: string) {
    return this.http.get<any>(`${this.apiUrl}/tcgplayer/${id}`);
  }

  getSetById(id: string) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}

