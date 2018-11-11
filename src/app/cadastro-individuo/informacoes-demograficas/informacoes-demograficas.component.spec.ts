import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacoesDemograficasComponent } from './informacoes-demograficas.component';

describe('InformacoesDemograficasComponent', () => {
  let component: InformacoesDemograficasComponent;
  let fixture: ComponentFixture<InformacoesDemograficasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacoesDemograficasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacoesDemograficasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
