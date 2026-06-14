import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatarataLimonesPage } from './catarata-limones-page';

describe('CatarataLimonesPage', () => {
  let component: CatarataLimonesPage;
  let fixture: ComponentFixture<CatarataLimonesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatarataLimonesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CatarataLimonesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
