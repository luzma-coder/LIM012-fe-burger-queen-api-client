import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

import { ServiceAuthService } from '../../services/service-auth.service';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() user: User;

  constructor(
    private router: Router,
    private authService: ServiceAuthService,
    private userService: UserService
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
        console.log('longitud', resp.body.token.length);
        console.log('body', resp.body);
        if (resp.body.token.length > 0 && resp.status === 200) {
          localStorage.setItem('token', resp.body.token);
          this.userService.getAdmin(objUser.email)
          .subscribe((data) => {
            localStorage.setItem('currentUserId', data[0].id);
            localStorage.setItem('currentUserEmail', data[0].email);
            localStorage.setItem('currentUserAdmin', data[0].roles.admin);
            // localStorage.setItem('currentUser', `${data[0].email}-${data[0].roles.admin}-${data[0].id}`);
            if (data[0].roles.admin){
              this.router.navigate(['/navigation/user']);
            } else {
              this.navigateToOrders();
            }
          });
        }
      }, (error: HttpErrorResponse) => {
        alert('email y password son necesarios');
        console.log(error.status);
      });
  }
}
