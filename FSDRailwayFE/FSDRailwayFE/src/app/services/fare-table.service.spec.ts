import { TestBed } from '@angular/core/testing';

import { FareTableService } from './fare-table.service';

describe('FareTableService', () => {
  let service: FareTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FareTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
