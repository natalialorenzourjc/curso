import { TestBed } from '@angular/core/testing';

import { Probando2Service } from './probando2.service';

describe('Probando2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Probando2Service = TestBed.get(Probando2Service);
    expect(service).toBeTruthy();
  });
});
