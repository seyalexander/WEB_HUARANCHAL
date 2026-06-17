import { NgClass } from '@angular/common';
import { Component } from '@angular/core';


export type TabCultural =
  | 'costumbres'
  | 'tradiciones'
  | 'festividades'
  | 'galeria';

@Component({
  selector: 'app-costumbres-tradiciones-page',
  imports: [NgClass],
  templateUrl: './costumbres-tradiciones-page.html',
  styleUrl: './costumbres-tradiciones-page.css',
})
export class CostumbresTradicionesPage {
  tabSeleccionado: TabCultural = 'costumbres';

tabs = [
  {
    id: 'costumbres',
    icono: '🌱',
    nombre: 'Costumbres'
  },
  {
    id: 'tradiciones',
    icono: '🎭',
    nombre: 'Tradiciones'
  },
  {
    id: 'festividades',
    icono: '⛪',
    nombre: 'Festividades'
  },
  {
    id: 'galeria',
    icono: '📸',
    nombre: 'Galería Cultural'
  }
];
}
