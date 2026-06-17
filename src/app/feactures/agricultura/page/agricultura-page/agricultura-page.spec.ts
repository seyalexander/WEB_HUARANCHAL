import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriculturaPage } from './agricultura-page';

describe('AgriculturaPage', () => {
  let component: AgriculturaPage;
  let fixture: ComponentFixture<AgriculturaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgriculturaPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AgriculturaPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
