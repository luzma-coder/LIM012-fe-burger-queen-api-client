import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceAuthService {

  url = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  // consultar (route) /auth
  // tslint:disable-next-line: ban-types
  getServiceAuth(body: object): Observable< Object> {
    return this.http.post(`${this.url}auth`, body, { observe : 'response' });
  }
}
