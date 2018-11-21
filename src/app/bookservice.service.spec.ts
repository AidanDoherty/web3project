import { TestBed, inject } from '@angular/core/testing';

import { BookserviceService } from './bookservice.service';

describe('BookserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookserviceService]
    });
  });

  it('should be created', inject([BookserviceService], (service: BookserviceService) => {
    expect(service).toBeTruthy();
  }));
});
