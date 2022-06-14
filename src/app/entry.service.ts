import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Entry } from './entry';

@Injectable({
  providedIn: 'root'
})

export class EntryService {

  private baseURL = "http://localhost:8080/Product"; 
  constructor(private httpClient: HttpClient) { }

  getEntryList(): Observable<Entry[]>{
    return this.httpClient.get<Entry[]>(`${this.baseURL}/getProduct`);

  }

  createEntry(entry: Entry): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/addProduct`, entry);
  }

  getEntryById(id: number ): Observable<Entry>{
    return this.httpClient.get<Entry>(`${this.baseURL}/getProduct/${id}`);

  }

  updateEntry(id: number, entry:Entry): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/updateProduct/${id}`, entry);
  }

  deleteEntry(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/delProduct/${id}`);
  }

    
}
