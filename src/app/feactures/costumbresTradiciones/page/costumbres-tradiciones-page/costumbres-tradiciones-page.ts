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
    nombre: 'Costumbres'
  },
  {
    id: 'tradiciones',
    nombre: 'Tradiciones'
  },
  {
    id: 'festividades',
    nombre: 'Festividades'
  },
  {
    id: 'galeria',
    nombre: 'Galería Cultural'
  }
];
}
