import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumbresTradicionesPage } from './costumbres-tradiciones-page';

describe('CostumbresTradicionesPage', () => {
  let component: CostumbresTradicionesPage;
  let fixture: ComponentFixture<CostumbresTradicionesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostumbresTradicionesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CostumbresTradicionesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
