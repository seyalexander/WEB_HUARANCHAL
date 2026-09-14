import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrutasParalaxComponent } from './frutas-paralax-component';

describe('FrutasParalaxComponent', () => {
  let component: FrutasParalaxComponent;
  let fixture: ComponentFixture<FrutasParalaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrutasParalaxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrutasParalaxComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
