import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormModalService {

  constructor(private _httpClient: HttpClient) { }
  private showSubject = new BehaviorSubject<boolean>(false);

  show$: Observable<boolean> = this.showSubject.asObservable();

  hide(): void {
    this.showSubject.next(false);
    document.documentElement.style.overflow = 'auto';
  }

  show(): void {
    this.showSubject.next(true);
    document.documentElement.style.overflow = 'hidden'
  }

  createUser(user: any): Observable<any> {
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${environment.gorestToken}`
    })

    const data = {
      name: user.name,
      email: user.email,
      //Aleatorizar valores
      status: Math.random() <= Math.random() ? "active" : "inactive",
      gender: Math.random() > Math.random() ? 'female' : 'male'
    }

    return this._httpClient.post(`${environment.url}/users`, data, { headers: reqHeader });
  }


}
