import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaLugarTuristico } from './tarjeta-lugar-turistico';

describe('TarjetaLugarTuristico', () => {
  let component: TarjetaLugarTuristico;
  let fixture: ComponentFixture<TarjetaLugarTuristico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaLugarTuristico],
    }).compileComponents();

    fixture = TestBed.createComponent(TarjetaLugarTuristico);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
