import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugaresDestacadosInicioComponents } from './lugares-destacados-inicio-components';

describe('LugaresDestacadosInicioComponents', () => {
  let component: LugaresDestacadosInicioComponents;
  let fixture: ComponentFixture<LugaresDestacadosInicioComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LugaresDestacadosInicioComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(LugaresDestacadosInicioComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
