import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceAuthService {

  url = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // consultar (route) /auth
  // tslint:disable-next-line: ban-types
  getServiceAuth(body: object): Observable< Object> {
    return this.http.post(`${this.url}auth`, body, { observe : 'response' });
  }
}
