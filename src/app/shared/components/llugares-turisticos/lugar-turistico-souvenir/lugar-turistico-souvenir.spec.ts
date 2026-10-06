import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugarTuristicoSouvenir } from './lugar-turistico-souvenir';

describe('LugarTuristicoSouvenir', () => {
  let component: LugarTuristicoSouvenir;
  let fixture: ComponentFixture<LugarTuristicoSouvenir>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LugarTuristicoSouvenir],
    }).compileComponents();

    fixture = TestBed.createComponent(LugarTuristicoSouvenir);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
