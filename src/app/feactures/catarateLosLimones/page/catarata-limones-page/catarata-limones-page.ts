import { Component } from '@angular/core';

export type TabLugar =
  | 'galeria'
  | 'historia'
  | 'souvenirs'
  | 'ubicacion';

@Component({
  selector: 'app-catarata-limones-page',
  imports: [],
  templateUrl: './catarata-limones-page.html',
  styleUrl: './catarata-limones-page.css',
})
export class CatarataLimonesPage {
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
