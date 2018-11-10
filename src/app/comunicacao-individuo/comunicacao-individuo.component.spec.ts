import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicacaoIndividuoComponent } from './comunicacao-individuo.component';

describe('ComunicacaoIndividuoComponent', () => {
  let component: ComunicacaoIndividuoComponent;
  let fixture: ComponentFixture<ComunicacaoIndividuoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunicacaoIndividuoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunicacaoIndividuoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
