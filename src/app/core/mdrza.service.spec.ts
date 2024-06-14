import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { MdrzaService } from './mdrza.service';

describe('MdrzaService', () => {
  let service: MdrzaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [provideHttpClientTesting()],
    });
    service = TestBed.inject(MdrzaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
