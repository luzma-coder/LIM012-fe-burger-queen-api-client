import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { UserComponent } from './user.component';
import { UserService } from 'src/app/services/user.service';
import { USERS } from 'src/assets/mock-data';

describe('User Component', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userService;
  let getUsersSpy;

  beforeEach(async(() => {
    userService = jasmine.createSpyObj('UserService', ['getUsers']);
    getUsersSpy = userService.getUsers.and.returnValue( of(USERS) );
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      providers: [
        { provide: UserService, useValue: userService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call User Service', async(() => {
    expect(getUsersSpy.calls.any()).toBe(true);
  }));

});
