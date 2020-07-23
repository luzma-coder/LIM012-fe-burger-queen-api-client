import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';

import { ServiceAuthService } from './service-auth.service';

describe('ServiceAuthService', () => {
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
