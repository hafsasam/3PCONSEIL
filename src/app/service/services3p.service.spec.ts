import { TestBed, inject } from '@angular/core/testing';

import { Services3pService } from './services3p.service';

describe('Services3pService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Services3pService]
    });
  });

  it('should be created', inject([Services3pService], (service: Services3pService) => {
    expect(service).toBeTruthy();
  }));
});
