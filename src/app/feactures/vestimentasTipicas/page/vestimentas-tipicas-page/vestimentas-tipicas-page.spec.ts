import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VestimentasTipicasPage } from './vestimentas-tipicas-page';

describe('VestimentasTipicasPage', () => {
  let component: VestimentasTipicasPage;
  let fixture: ComponentFixture<VestimentasTipicasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VestimentasTipicasPage],
    }).compileComponents();

    fixture = TestBed.createComponent(VestimentasTipicasPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
