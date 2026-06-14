import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterInicioComponents } from './footer-inicio-components';

describe('FooterInicioComponents', () => {
  let component: FooterInicioComponents;
  let fixture: ComponentFixture<FooterInicioComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterInicioComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterInicioComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
