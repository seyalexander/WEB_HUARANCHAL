import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastronomiaPage } from './gastronomia-page';

describe('GastronomiaPage', () => {
  let component: GastronomiaPage;
  let fixture: ComponentFixture<GastronomiaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GastronomiaPage],
    }).compileComponents();

    fixture = TestBed.createComponent(GastronomiaPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
