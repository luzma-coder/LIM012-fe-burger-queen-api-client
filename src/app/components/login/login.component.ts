import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  postData(): void {
    const url = 'http://httpbin.org/post';
    this.http.post(url, {
      email: this.email
    }).toPromise().then((data: any) => {
      console.log(data);
      console.log(JSON.stringify(data.json.name));
    });
  }

  /*  constructor(private router: Router) { } */
  ngOnInit(): void {
  }
  navigateToOrders(): void {
    this.router.navigate(['/navigation/order']);
  }
  login(): void {
    if (this.postData()) {
      this.navigateToOrders();
    } else {
      console.log('trabajador no autenticado');
    }
  }
}

