import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3000/';
  LStoken = localStorage.getItem('token');

  constructor(private http: HttpClient) { }

  // consultar (route) GET /users/:uid
  getUser(email: string): Observable<User> {
    const url = `${this.url}users/:${email}`;
    return this.http.get<User>(url, { params : { token : this.LStoken }});
  }

}
