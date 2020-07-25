import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { TestBed } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class ServiceAuthService {

  url = 'http://localhost:3000/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  // tslint:disable-next-line: ban-types
  getServiceAuth(body: object): Observable<Object> {

    return this.http.post(`${this.url}auth`, body);

    // this.http.post(`${this.url}auth`, body).toPromise().then((resp: any) => {
    //   console.log(JSON.stringify(resp.json.token));
    // });

    // this.http.post(`${this.url}auth`, body)
    //   .subscribe(resp => {
    //     console.log(resp.toLocaleString);
    //   });
  }
}
