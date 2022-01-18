import { TestBed } from '@angular/core/testing';

import { RecuperoDatiService } from './recupero-dati.service';

describe('RecuperoDatiService', () => {
  let service: RecuperoDatiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecuperoDatiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
