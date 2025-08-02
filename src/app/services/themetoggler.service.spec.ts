import { TestBed } from '@angular/core/testing';

import { ThemetogglerService } from './themetoggler.service';

describe('ThemetogglerService', () => {
  let service: ThemetogglerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemetogglerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
