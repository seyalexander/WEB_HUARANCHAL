import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseriosComponent } from './caserios-component';

describe('CaseriosComponent', () => {
  let component: CaseriosComponent;
  let fixture: ComponentFixture<CaseriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseriosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CaseriosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
