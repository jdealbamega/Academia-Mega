// Archivo de servicio para manejar operaciones CRUD de items
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Definición de la interfaz Item
// Esta interfaz define la estructura de un item
export interface Item { _id?: string; name: string; price: number; }

@Injectable({ providedIn: 'root' })
export class ItemService {
  private apiUrl = 'http://localhost:3000/api/items';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }

  create(item: Item): Observable<Item> {
    return this.http.post<Item>(this.apiUrl, item);
  }
}