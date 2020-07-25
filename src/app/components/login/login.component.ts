import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    if (!email) { alert('ingrese email'); return; }
    if (!password) {alert('ingrese password'); return; }
    const objUser = {
      email,
      password,
      token: 'jdsgjk3y87',
    };
    this.authService.getServiceAuth(objUser)
      .subscribe((resp: any) => {
        console.log(resp);
        console.log(resp.token);
        console.log(resp.token.length);
        if (resp.token.length > 0) {
         this.navigateToOrders();
        } else {
          alert('error');
        }
      });
  }
}

