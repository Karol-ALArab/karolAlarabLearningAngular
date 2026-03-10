import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Items } from '../shared-models/items';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  private apiUrl = 'api/items';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  // READ ALL
  getEquipment(): Observable<Items[]> {
    return this.http.get<Items[]>(this.apiUrl);
  }

  // READ ONE
  getEquipmentById(id: number): Observable<Items> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Items>(url);
  }

  // CREATE
  addEquipment(item: Items): Observable<Items> {
    return this.http.post<Items>(this.apiUrl, item, this.httpOptions);
  }

  // UPDATE
  updateEquipment(item: Items): Observable<Items> {
    const url = `${this.apiUrl}/${item.id}`;
    return this.http.put<Items>(url, item, this.httpOptions);
  }

  // DELETE
  deleteEquipment(id: number): Observable<Items> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Items>(url, this.httpOptions);
  }
}
