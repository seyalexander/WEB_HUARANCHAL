import { Component } from '@angular/core';

export type TabLugar =
  | 'galeria'
  | 'historia'
  | 'souvenirs'
  | 'ubicacion';

@Component({
  selector: 'app-banios-termanles-page',
  imports: [],
  templateUrl: './banios-termanles-page.html',
  styleUrl: './banios-termanles-page.css',
})
export class BaniosTermanlesPage {

  tabSeleccionado: TabLugar = 'galeria';

  tabs = [
    {
      id: 'galeria',
      icono: '📸',
      nombre: 'Galería'
    },
    {
      id: 'historia',
      icono: '📖',
      nombre: 'Historia'
    },
    {
      id: 'souvenirs',
      icono: '🎁',
      nombre: 'Souvenirs'
    },
    {
      id: 'ubicacion',
      icono: '📍',
      nombre: 'Cómo llegar'
    }
  ];

}
