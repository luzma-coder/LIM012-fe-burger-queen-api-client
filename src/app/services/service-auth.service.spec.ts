import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpClientTestingModule} from '@angular/common/http/testing';

import { ServiceAuthService } from './service-auth.service';

describe('Service AuthService', () => {
  let service: ServiceAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceAuthService],
      imports: [HttpClientTestingModule] });
    service = TestBed.inject(ServiceAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

describe('Service AuthService call http', () => {
  let service: ServiceAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceAuthService],
      imports: [HttpClientTestingModule] });
    service = TestBed.inject(ServiceAuthService);
  });

  afterEach(() => {
    service = null;
  });

  const objuser = {
    email: 'prueba@burguer.com',
    password: '123456'
  };
  const data = {
    body  : {
      token : '823747jnd',
    },
    status : 200
  };

  let serviceSpy: any;
  // serviceSpy = service.getServiceAuth.and.returnValue( of(data) );

  it('should return object with token', () => {
    serviceSpy = spyOn(service, 'getServiceAuth').and.returnValue(of(data));
    service.getServiceAuth(objuser)
    // .toPromise().then(( resp: any ) => {
    .subscribe(( resp: any ) => {
      expect(resp.body.token).toEqual('823747jnd');
    });
  });

  it('should return object with status 200', () => {
      serviceSpy = spyOn(service, 'getServiceAuth').and.returnValue(of(data));
      service.getServiceAuth(objuser)
      .subscribe(( resp: any ) => {
        expect(resp.status).toEqual(200);
      });
  });
});
