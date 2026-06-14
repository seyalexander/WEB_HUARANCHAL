import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosEmblematicosInicioComponents } from './productos-emblematicos-inicio-components';

describe('ProductosEmblematicosInicioComponents', () => {
  let component: ProductosEmblematicosInicioComponents;
  let fixture: ComponentFixture<ProductosEmblematicosInicioComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosEmblematicosInicioComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductosEmblematicosInicioComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
