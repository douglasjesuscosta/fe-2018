import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinculoIndividuoComponent } from './vinculo-individuo.component';

describe('VinculoIndividuoComponent', () => {
  let component: VinculoIndividuoComponent;
  let fixture: ComponentFixture<VinculoIndividuoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinculoIndividuoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinculoIndividuoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
