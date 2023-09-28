import { TestBed } from '@angular/core/testing';

import { ExpressTableService } from './express-table.service';

describe('ExpressTableService', () => {
  let service: ExpressTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpressTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
