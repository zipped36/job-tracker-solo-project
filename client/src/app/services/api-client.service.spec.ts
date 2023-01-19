import { TestBed } from '@angular/core/testing';

import { ApiClientService } from './api-client.service';
import { HttpClientModule } from '@angular/common/http';
describe('ApiClientService', () => {
  let service: ApiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ApiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
