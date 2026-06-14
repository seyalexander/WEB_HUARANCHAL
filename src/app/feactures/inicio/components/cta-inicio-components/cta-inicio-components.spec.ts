import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTAInicioComponents } from './cta-inicio-components';

describe('CTAInicioComponents', () => {
  let component: CTAInicioComponents;
  let fixture: ComponentFixture<CTAInicioComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CTAInicioComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(CTAInicioComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
