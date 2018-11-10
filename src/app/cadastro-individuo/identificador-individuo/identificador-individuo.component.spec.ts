import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificadorIndividuoComponent } from './identificador-individuo.component';

describe('IdentificadorIndividuoComponent', () => {
  let component: IdentificadorIndividuoComponent;
  let fixture: ComponentFixture<IdentificadorIndividuoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentificadorIndividuoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificadorIndividuoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
