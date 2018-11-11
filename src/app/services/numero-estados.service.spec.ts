import { TestBed } from '@angular/core/testing';

import { NumeroEstadosService } from './numero-estados.service';

describe('NumeroEstadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NumeroEstadosService = TestBed.get(NumeroEstadosService);
    expect(service).toBeTruthy();
  });
});
