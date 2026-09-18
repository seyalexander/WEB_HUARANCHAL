import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPdfHuaranchalComponent } from './button-pdf-huaranchal-component';

describe('ButtonPdfHuaranchalComponent', () => {
  let component: ButtonPdfHuaranchalComponent;
  let fixture: ComponentFixture<ButtonPdfHuaranchalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonPdfHuaranchalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonPdfHuaranchalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
