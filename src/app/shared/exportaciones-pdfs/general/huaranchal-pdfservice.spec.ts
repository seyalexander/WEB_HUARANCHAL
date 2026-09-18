import { TestBed } from '@angular/core/testing';

import { HuaranchalPDFService } from './huaranchal-pdfservice';

describe('HuaranchalPDFService', () => {
  let service: HuaranchalPDFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HuaranchalPDFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
