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
 tradiciones = [
  {
    id: 1,
    nombre: 'Fiesta Patronal',
    imagen: 'assets/COSTUMBRES/costumbres_05.png',
    descripcion: 'Celebración religiosa tradicional.',
    descripcionLarga:
      'La fiesta patronal reúne a pobladores y visitantes mediante actividades religiosas, música y expresiones culturales.'
  },
  {
    id: 2,
    nombre: 'Faenas Comunales',
    imagen: 'assets/COSTUMBRES/costumbres_06.png',
    descripcion: 'Trabajo colaborativo entre vecinos.',
    descripcionLarga:
      'Las faenas comunales fortalecen la unión y permiten realizar obras de beneficio para toda la comunidad.'
  },
  {
    id: 3,
    nombre: 'Festividades Agrícolas',
    imagen: 'assets/COSTUMBRES/costumbres_07.png',
    descripcion: 'Tradiciones ligadas a la producción agrícola.',
    descripcionLarga:
      'Diversas actividades acompañan las épocas de siembra y cosecha, manteniendo vivas las costumbres ancestrales.'
  }
];

tradicionSeleccionada = this.tradiciones[0];

seleccionarTradicion(tradicion: any) {
  this.tradicionSeleccionada = tradicion;
}
}
