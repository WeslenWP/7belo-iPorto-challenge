import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CostumersService {
  // private url 
  constructor(private _httpClient: HttpClient) { }

  getData(): Observable<any> {
    return this._httpClient.get("https://gorest.co.in/public/v2/comments")
  }
}
