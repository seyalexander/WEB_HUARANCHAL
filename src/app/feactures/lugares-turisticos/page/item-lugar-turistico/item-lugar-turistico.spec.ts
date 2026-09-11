import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemLugarTuristico } from './item-lugar-turistico';

describe('ItemLugarTuristico', () => {
  let component: ItemLugarTuristico;
  let fixture: ComponentFixture<ItemLugarTuristico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemLugarTuristico],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemLugarTuristico);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
