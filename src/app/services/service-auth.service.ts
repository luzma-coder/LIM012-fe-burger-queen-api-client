import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceAuthService {
  url: string;
  json;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/';
  }
  getServiceAuth(): void {
    const body = {
      email: 'test2@Test.com',
      password: '12345',
      token: 'nnjnjnjnnjnj'
    };
    this.http.post(`${this.url}auth`, body)
      .subscribe(resp => {
        console.log(resp);
        console.log(resp.json.token);
        this.json = JSON.stringify(resp.json);
      });
  }
}
