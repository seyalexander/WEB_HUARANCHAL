import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Panoramica360Component } from './panoramica360-component';

describe('Panoramica360Component', () => {
  let component: Panoramica360Component;
  let fixture: ComponentFixture<Panoramica360Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Panoramica360Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Panoramica360Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
