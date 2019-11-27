import { TestBed } from '@angular/core/testing';

import { ProbandoService } from './probando.service';

describe('ProbandoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProbandoService = TestBed.get(ProbandoService);
    expect(service).toBeTruthy();
  });
});
