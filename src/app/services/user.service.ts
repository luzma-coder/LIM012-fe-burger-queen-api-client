import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = environment.apiUrl;
  LStoken = localStorage.getItem('token');

  constructor(private http: HttpClient) { }

  // consultar (route) GET /users/:uid
  getUser(email: string): Observable<User> {
    const url = `${this.url}users/:${email}`;
    return this.http.get<User>(url, { params : { token : this.LStoken }});
  }

}
