import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class ServiceAuthService {
  url: string;
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
      });
  }
}
