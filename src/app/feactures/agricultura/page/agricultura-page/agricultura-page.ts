import { Component } from '@angular/core';

@Component({
  selector: 'app-agricultura-page',
  imports: [],
  templateUrl: './agricultura-page.html',
  styleUrl: './agricultura-page.css',
})
export class AgriculturaPage {
  cultivos = [
    {
      id: 1,
      nombre: 'Granadilla',
      imagen: 'assets/AGRICULTURA/granadilla_01.png',
      modelo: 'assets/AGRICULTURA/agricultor_maiz_01.png',
      descripcion: 'Cultivo fundamental en la alimentación y economía local.'
    },
    {
      id: 2,
      nombre: 'Papa',
      imagen: 'assets/AGRICULTURA/papa_01.png',
      modelo: 'assets/AGRICULTURA/agricultor_papa_01.png',
      descripcion: 'Producto tradicional cultivado en las zonas altas.'
    },
    {
      id: 3,
      nombre: 'Naranjas',
      imagen: 'assets/AGRICULTURA/naranja_01.png',
      modelo: 'assets/AGRICULTURA/agricultor_trigo_01.png',
      descripcion: 'Utilizado en la elaboración de diversos alimentos.'
    },
    {
      id: 4,
      nombre: 'Café',
      imagen: 'assets/AGRICULTURA/cafe_01.png',
      modelo: 'assets/AGRICULTURA/agricultor_cebada_01.png',
      descripcion: 'Cultivo resistente adaptado al clima serrano.'
    }
  ];

  cultivoSeleccionado = this.cultivos[0];

  showAgricultor = false;

  seleccionarCultivo(cultivo: any) {
    this.cultivoSeleccionado = cultivo;
    this.showAgricultor = true;
  }

  onHoverCard() {
    this.showAgricultor = true;
  }

  onLeaveCard() {
    this.showAgricultor = false;
  }
}
