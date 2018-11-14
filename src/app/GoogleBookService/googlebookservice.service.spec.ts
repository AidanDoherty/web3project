import { TestBed, inject } from '@angular/core/testing';

import { GooglebookserviceService } from './googlebookservice.service';

describe('GooglebookserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GooglebookserviceService]
    });
  });

  it('should be created', inject([GooglebookserviceService], (service: GooglebookserviceService) => {
    expect(service).toBeTruthy();
  }));
});
