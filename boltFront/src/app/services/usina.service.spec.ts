import { TestBed } from '@angular/core/testing';

import { UsinaService } from './usina.service';

describe('UsinaService', () => {
  let service: UsinaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsinaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
