import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment';
import { tap, catchError } from 'rxjs/operators';

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
    // .subscribe(data => console.log(data)))
      // .pipe(
      //   tap(_ => this.log('fetched heroes')),
      //   catchError(this.handleError<User[]>('getHeroes', []))
      // );
  }

// enviar al servidor un nuevo usuario (route) POST /users
  postUser(user: User): Observable<User> {
    return this.http.post<User>(this.urlUsers, user);
    // .pipe(
    //   tap((newUser: User) => this.log(`added hero w/ id=${newUser._id}`)),
    //   catchError(this.handleError<Hero>('addHero'))
    // );
  }

// DELETE
  deleteUser(user: User | string): Observable<User> {
    const id = typeof user === 'string' ? user : user._id;
    const url = `${this.urlUsers}/${id}`;
    console.log(url);
    console.log(id);
    return this.http.delete<User>(url, this.httpOptions);
    // .pipe(
    //   tap(_ => this.log(`deleted hero id=${id}`)),
    //   catchError(this.handleError<Hero>('deleteHero'))
    // );
  }

// PUT
  updateUser(user: User): Observable<any> {
    return this.http.put(this.urlUsers, user, this.httpOptions);
    // .pipe(
    //   tap(_ => this.log(`updated hero id=${hero.id}`)),
    //   catchError(this.handleError<any>('updateHero'))
    // );
  }
}
