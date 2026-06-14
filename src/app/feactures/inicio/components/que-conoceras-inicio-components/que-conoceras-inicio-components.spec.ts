import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueConocerasInicioComponents } from './que-conoceras-inicio-components';

describe('QueConocerasInicioComponents', () => {
  let component: QueConocerasInicioComponents;
  let fixture: ComponentFixture<QueConocerasInicioComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueConocerasInicioComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(QueConocerasInicioComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
