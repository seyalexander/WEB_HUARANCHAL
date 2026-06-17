import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLugaresTuristicos } from './footer-lugares-turisticos';

describe('FooterLugaresTuristicos', () => {
  let component: FooterLugaresTuristicos;
  let fixture: ComponentFixture<FooterLugaresTuristicos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterLugaresTuristicos],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterLugaresTuristicos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
