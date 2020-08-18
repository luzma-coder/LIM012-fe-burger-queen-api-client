import { Location } from '@angular/common';
import { async, ComponentFixture, TestBed, fakeAsync, tick  } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';

import { routes } from '../../app-routing.module';
import { LoginComponent } from './login.component';
import { ServiceAuthService } from '../../services/service-auth.service';
import { UserService } from 'src/app/services/user.service';
import { USERS, dataUSER } from 'src/assets/mock-data';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let location: Location;
  let router: Router;
  let userService;
  let getUsersSpy;

  const serviceAuthService = jasmine.createSpyObj('ServiceAuthService', ['getServiceAuth']);
  let data = {
    body  : {
      token : '823747jnd',
    },
    status : 200
    };

  let getServiceAuthSpy: any;
  getServiceAuthSpy = serviceAuthService.getServiceAuth.and.returnValue( of(data) );

  beforeEach(async(() => {
    userService = jasmine.createSpyObj('UserService', ['getAdmin']);
    getUsersSpy = userService.getAdmin.and.returnValue( of(dataUSER) );
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [RouterTestingModule.withRoutes(routes)],
      providers: [
        { provide: ServiceAuthService, useValue: serviceAuthService },
        { provide: UserService, useValue: userService } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
      expect(location.path()).toBe('/login');
    });
  }));

  it('navigate to "order" redirects you to /order', fakeAsync(() => {
    router.navigate(['navigation/order']).then(() => {
      tick(0);
      expect(location.path()).toBe('/navigation/order');
    });
  }));

  it('should be status code 200 redirects to /order',  fakeAsync(() => {
    const objuser = {
      email: 'prueba@burguer.com',
      password: '123456'
    };
    component.authUser(objuser.email, objuser.password);
    tick();
    fixture.detectChanges();
    expect(location.path()).toBe('/navigation/order');
  }));

  it('should be status code 400',  fakeAsync(() => {
    const objuser = {
      email: '',
      password: ''
    };
    data = {
      body  : {
        token : '823747jnd',
      },
      status : 400
    };
    component.authUser(objuser.email, objuser.password);
    tick();
    fixture.detectChanges();
    console.log(data.status);
    expect(data.status).toMatch('400');
  }));
});
