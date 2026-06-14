import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaniosTermanlesPage } from './banios-termanles-page';

describe('BaniosTermanlesPage', () => {
  let component: BaniosTermanlesPage;
  let fixture: ComponentFixture<BaniosTermanlesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaniosTermanlesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(BaniosTermanlesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
