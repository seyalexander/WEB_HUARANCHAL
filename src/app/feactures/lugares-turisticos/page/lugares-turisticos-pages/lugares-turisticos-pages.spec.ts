import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugaresTuristicosPages } from './lugares-turisticos-pages';

describe('LugaresTuristicosPages', () => {
  let component: LugaresTuristicosPages;
  let fixture: ComponentFixture<LugaresTuristicosPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LugaresTuristicosPages],
    }).compileComponents();

    fixture = TestBed.createComponent(LugaresTuristicosPages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
