import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CostumersService {
  // private url 
  constructor(private _httpClient: HttpClient) { }

  getData(): Observable<any> {
    return this._httpClient.get(`${environment.url}/comments`)
  }
}
