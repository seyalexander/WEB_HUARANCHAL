import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoramicaComponents } from './panoramica-components';

describe('PanoramicaComponents', () => {
  let component: PanoramicaComponents;
  let fixture: ComponentFixture<PanoramicaComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanoramicaComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(PanoramicaComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
