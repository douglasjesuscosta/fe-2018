import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NomeIndividuoComponent } from './nome-individuo.component';

describe('NomeIndividuoComponent', () => {
  let component: NomeIndividuoComponent;
  let fixture: ComponentFixture<NomeIndividuoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NomeIndividuoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NomeIndividuoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
