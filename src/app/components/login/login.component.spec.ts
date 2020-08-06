import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

class MockAuthService {
  authenticated = false;

  isAuthenticated(): any {
    return this.authenticated;
  }
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let authservice: MockAuthService;
  let userservice: MockAuthService;

  beforeEach(() => {
    authservice = new MockAuthService();
    userservice = new MockAuthService();
    // component = new LoginComponent(router, authservice, userservice);
  });

  afterEach(() => {
    authservice = null;
    userservice = null;
    component = null;
  });


  it('can Login returns true when the user is authenticated', () => {
    authservice.authenticated = true;
    expect(component.navigateToOrders()).toBeTruthy();
  });
  // let fixture: ComponentFixture<LoginComponent>;
  // let userServiceStub: Partial<UserService>;

  // userServiceStub = {
  //   isLoggedIn: true,
  //   user: { name: 'Test User' },
  // };

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ LoginComponent ],
  //     providers: [ { provide: UserService, useValue: userServiceStub } ],
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(LoginComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
