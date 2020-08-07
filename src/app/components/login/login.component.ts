import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { ServiceAuthService } from '../../services/service-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: ServiceAuthService
  ) { }

  ngOnInit(): void {
  }

  navigateToOrders(): void {
    this.router.navigate(['/navigation/order']);
  }

  authUser(email: string, password: string): void {
    email = email.trim();
    password = password.trim();
    // if (!email) { alert('ingrese email'); return; }
    // if (!password) {alert('ingrese password'); return; }
    const objUser = {
      email,
      password
    };
    this.authService.getServiceAuth(objUser)
      .subscribe((resp: any) => {
        if (resp.body.token.length > 0 && resp.status === 200) {
          localStorage.setItem('token', resp.body.token);
          this.navigateToOrders();
        }
      }, (error: HttpErrorResponse) => {
        alert('email y password son necesarios');
        console.log(error.status);
      });
  }
}
