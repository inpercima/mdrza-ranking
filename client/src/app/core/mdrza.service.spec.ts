import { TestBed } from '@angular/core/testing';

import { MdrzaService } from './mdrza.service';

describe('MdrzaService', () => {
  let service: MdrzaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MdrzaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
