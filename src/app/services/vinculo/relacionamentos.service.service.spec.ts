import { TestBed } from '@angular/core/testing';

import { RelacionamentosService } from './relacionamentos.service.service';

describe('Relacionamentos.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RelacionamentosService = TestBed.get(RelacionamentosService);
    expect(service).toBeTruthy();
  });
});
