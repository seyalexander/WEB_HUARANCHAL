import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChillinPage } from './chillin-page';

describe('ChillinPage', () => {
  let component: ChillinPage;
  let fixture: ComponentFixture<ChillinPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChillinPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ChillinPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
