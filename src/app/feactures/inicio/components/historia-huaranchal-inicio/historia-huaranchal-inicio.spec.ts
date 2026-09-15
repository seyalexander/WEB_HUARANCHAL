import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaHuaranchalInicio } from './historia-huaranchal-inicio';

describe('HistoriaHuaranchalInicio', () => {
  let component: HistoriaHuaranchalInicio;
  let fixture: ComponentFixture<HistoriaHuaranchalInicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoriaHuaranchalInicio],
    }).compileComponents();

    fixture = TestBed.createComponent(HistoriaHuaranchalInicio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
