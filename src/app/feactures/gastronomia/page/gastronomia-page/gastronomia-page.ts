import { Component } from '@angular/core';

@Component({
  selector: 'app-gastronomia-page',
  imports: [],
  templateUrl: './gastronomia-page.html',
  styleUrl: './gastronomia-page.css',
})
export class GastronomiaPage {
  comidas = [
    {
      id: 1,
      nombre: 'Shambar',
      imagen: 'assets/GASTRONOMIA/shambar_01.png',
      modelo: 'assets/GASTRONOMIA/Gastronomia_modelo_humitas_01.png',
      descripcion: 'Plato tradicional preparado con trigo y menestras.'
    },
    {
      id: 2,
      nombre: 'Cuy Frito',
      imagen: 'assets/GASTRONOMIA/cuy_01.png',
      modelo: 'assets/GASTRONOMIA/Gastronomia_modelo_cuy_01.png',
      descripcion: 'Cuy crocante acompañado de papas y ensalada.'
    },
    {
      id: 3,
      nombre: 'Cabrito',
      imagen: 'assets/GASTRONOMIA/cabrito_01.png',
      modelo: 'assets/GASTRONOMIA/Gastronomia_modelo_cabrito_01.png',
      descripcion: 'Cabrito cocinado lentamente con especias.'
    },
    {
      id: 4,
      nombre: 'Humitas',
      imagen: 'assets/GASTRONOMIA/humitas_01.png',
      modelo: 'assets/GASTRONOMIA/Gastronomia_modelo_humitas_01.png',
      descripcion: 'Masa de maíz cocida envuelta en pancas.'
    },
  ];

  platoSeleccionado = this.comidas[0];

  seleccionarPlato(plato: any) {
    this.platoSeleccionado = plato;
    this.showModelo  = true;
  }

  showModelo  = false;

  onHoverCard() {
    this.showModelo  = true;
  }

  onLeaveCard() {
    this.showModelo  = false;
  }
}
