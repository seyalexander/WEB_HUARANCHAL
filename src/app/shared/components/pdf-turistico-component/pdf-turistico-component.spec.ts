import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfTuristicoComponent } from './pdf-turistico-component';

describe('PdfTuristicoComponent', () => {
  let component: PdfTuristicoComponent;
  let fixture: ComponentFixture<PdfTuristicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdfTuristicoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PdfTuristicoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
