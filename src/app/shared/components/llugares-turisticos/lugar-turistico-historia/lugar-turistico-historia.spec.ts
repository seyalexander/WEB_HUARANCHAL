import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugarTuristicoHistoria } from './lugar-turistico-historia';

describe('LugarTuristicoHistoria', () => {
  let component: LugarTuristicoHistoria;
  let fixture: ComponentFixture<LugarTuristicoHistoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LugarTuristicoHistoria],
    }).compileComponents();

    fixture = TestBed.createComponent(LugarTuristicoHistoria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
