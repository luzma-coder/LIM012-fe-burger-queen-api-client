import { Location } from '@angular/common';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from '@angular/router';
import { of } from 'rxjs';

import { routes } from '../../app-routing.module';
import { LoginComponent } from './login.component';
import { OrderComponent } from '../waiter/order/order.component';
import { ServiceAuthService } from '../../services/service-auth.service';

describe('Router: App', () => {
  let location: Location;
  let router: Router;
  let fixture;
  const serviceAuthService = jasmine.createSpyObj('ServiceAuthService', ['getServiceAuth']);
  const data = {
    body  : {
      token : '823747jnd',
    },
    status : 200
    };
  let getServiceAuthSpy;
  getServiceAuthSpy = serviceAuthService.getServiceAuth.and.returnValue( of(data) );

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent, OrderComponent],
      imports: [RouterTestingModule.withRoutes(routes)],
      providers: [{ provide: ServiceAuthService, useValue: serviceAuthService } ]
    });

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    fixture = TestBed.createComponent(LoginComponent);
    router.initialNavigation();
  });

  it('fakeAsync works', fakeAsync(() => {
    const promise = new Promise(resolve => {
      setTimeout(resolve, 10);
    });
    let done = false;
    promise.then(() => (done = true));
    tick(50);
    expect(done).toBeTruthy();
  }));

  it('navigate to "login" redirects you to /login', fakeAsync(() => {
    router.navigate(['']).then(() => {
      tick(0);
      console.log('--------------prueba----------------');
      console.log(location.path());
      expect(location.path()).toBe('/login');
    });
  }));

  it('navigate to "order" redirects you to /order', fakeAsync(() => {
    router.navigate(['navigation/order']).then(() => {
      tick(0);
      console.log('--------------prueba----------------');
      console.log(location.path());
      expect(location.path()).toBe('/navigation/order');
    });
  }));

  // it('navigate to "search" takes you to /search', fakeAsync(() => {
  //   router.navigate(['/search']).then(() => {
  //     expect(location.path()).toBe('/search');
  //   });
  // }));
});
