import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuthService } from '../../services/service-auth.service';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  json;

  constructor(
    private router: Router,
    private authService: ServiceAuthService
  ) { }

  /*  constructor(private router: Router) { } */
  ngOnInit(): void {
  }
  /* navigateToOrders(): void {
    this.authService.getServiceAuth();
    this.router.navigate(['/navigation/order']);

  } */
  navigateToOrders(): void {
    this.router.navigate(['/navigation/order']);

  }
  authUser(): void {
    this.authService.getServiceAuth();
    this.navigateToOrders();
    /* this.router.navigate(['/navigation/order']); */

  }
}

