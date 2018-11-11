import { TestBed } from '@angular/core/testing';

import { UsoNomeService } from './uso-nome.service';

describe('UsoNomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsoNomeService = TestBed.get(UsoNomeService);
    expect(service).toBeTruthy();
  });
});
