import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtesaniaViewer } from './artesania-viewer';

describe('ArtesaniaViewer', () => {
  let component: ArtesaniaViewer;
  let fixture: ComponentFixture<ArtesaniaViewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtesaniaViewer],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtesaniaViewer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
