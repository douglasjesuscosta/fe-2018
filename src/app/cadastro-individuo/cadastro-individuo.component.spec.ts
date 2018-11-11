import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroIndividuoComponent } from './cadastro-individuo.component';

describe('CadastroIndividuoComponent', () => {
  let component: CadastroIndividuoComponent;
  let fixture: ComponentFixture<CadastroIndividuoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroIndividuoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroIndividuoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
