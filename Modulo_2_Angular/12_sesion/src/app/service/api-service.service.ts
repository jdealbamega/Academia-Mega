import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private apiURL:string = "https://botw-compendium.herokuapp.com/api/v3/compendium/category/";
  constructor(private http:HttpClient) { }

  getCreatures(): Observable<any>{
    return this.http.get(`${this.apiURL}creatures`);
  }
}
