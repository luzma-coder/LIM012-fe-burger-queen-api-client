import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlUsers = `${environment.apiUrl}users`;
  LStoken = localStorage.getItem('token');
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

// consultar (route) GET /users/:uid
  getAdmin(email: string): Observable<User> {
    const url = `${this.urlUsers}/?email=${email}`;

    return this.http.get<User>(url, { headers : { token : this.LStoken }});
  }

// consultar del servidor (route) GET /users/
  getUsers(): Observable<User[]> {
    console.log(this.urlUsers);
    return this.http.get<User[]>(this.urlUsers);
  }

// enviar al servidor un nuevo usuario (route) POST /users
  postUser(user: User): Observable<User> {
    return this.http.post<User>(this.urlUsers, user);
  }

// DELETE
  deleteUser(user: User | string): Observable<User> {
    const id = typeof user === 'string' ? user : user._id;
    const url = `${this.urlUsers}/${id}`;
    console.log(url);
    console.log(id);
    return this.http.delete<User>(url, this.httpOptions);
  }

// PUT
  updateUser(user: User): Observable<any> {
    return this.http.put(this.urlUsers, user, this.httpOptions);
  }
}
