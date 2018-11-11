import { TestBed } from '@angular/core/testing';

import { TipoIdentificadorService } from './tipo-identificador.service';

describe('TipoIdentificadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoIdentificadorService = TestBed.get(TipoIdentificadorService);
    expect(service).toBeTruthy();
  });
});
