import { TestBed } from '@angular/core/testing';

import { alldetailservService } from './alldetailserv.service';

describe('BusdetailservService', () => {
  let service: alldetailservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(alldetailservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
