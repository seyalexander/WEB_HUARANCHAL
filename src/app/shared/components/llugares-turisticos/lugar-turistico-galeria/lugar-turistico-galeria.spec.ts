import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugarTuristicoGaleria } from './lugar-turistico-galeria';

describe('LugarTuristicoGaleria', () => {
  let component: LugarTuristicoGaleria;
  let fixture: ComponentFixture<LugarTuristicoGaleria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LugarTuristicoGaleria],
    }).compileComponents();

    fixture = TestBed.createComponent(LugarTuristicoGaleria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
