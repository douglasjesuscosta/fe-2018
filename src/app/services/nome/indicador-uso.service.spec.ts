import { TestBed } from '@angular/core/testing';

import { IndicadorUsoService } from './indicador-uso.service';

describe('IndicadorUsoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IndicadorUsoService = TestBed.get(IndicadorUsoService);
    expect(service).toBeTruthy();
  });
});
