import { TestBed } from '@angular/core/testing';

import { CustomerDataService } from './customer-data.service';

describe('CustomerDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerDataService = TestBed.get(CustomerDataService);
    expect(service).toBeTruthy();
  });
});
