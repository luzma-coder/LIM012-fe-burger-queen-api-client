import { Location } from '@angular/common';
import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from '@angular/router';
import { of } from 'rxjs';

import { LoginComponent } from './login.component';
import { OrderComponent } from '../waiter/order/order.component';
import { ServiceAuthService } from '../../services/service-auth.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  // Create a fake TwainService object with a `getQuote()` spy
  const routerSpy = jasmine.createSpyObj('Router', ['navigateToOrders']);
  const serviceAuthService = jasmine.createSpyObj('ServiceAuthService', ['getServiceAuth']);
  // Make the spy return a synchronous Observable with the test data
  const data = {
    body  : {
      token : '823747jnd',
    },
    status : 200
    };

  let getServiceAuthSpy;
  getServiceAuthSpy = serviceAuthService.getServiceAuth.and.returnValue( of(data) );

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: ServiceAuthService, useValue: serviceAuthService } ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
