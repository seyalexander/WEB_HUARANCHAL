import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Caserio {
  id: number;
  nombre: string;
  altitud: string;
  destacado: string;
  distanciaCentro?: string;
}

@Component({
  selector: 'app-caserios-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './caserios-component.html',
  styleUrl: './caserios-component.css',
})
export class CaseriosComponent {
  busqueda: string = '';

  caserios: Caserio[] = [
    { id: 1, nombre: 'Huaranchal Centro', altitud: '2,140 msnm', destacado: 'Capital distrital y Aguas Termales', distanciaCentro: '0 km (Matriz)' },
    { id: 2, nombre: 'Callanquitas', altitud: '1,850 msnm', destacado: 'Zona frutícola y clima cálido', distanciaCentro: '12 km' },
    { id: 3, nombre: 'Chapihual', altitud: '2,600 msnm', destacado: 'Miradores naturales y bosques de niebla', distanciaCentro: '18 km' },
    { id: 4, nombre: 'El Aliso', altitud: '2,050 msnm', destacado: 'Valles fértiles y producción agrícola', distanciaCentro: '8 km' },
    { id: 5, nombre: 'El Manzano', altitud: '1,750 msnm', destacado: 'Ribera del río y pesca de truchas', distanciaCentro: '15 km' },
    { id: 6, nombre: 'El Milagro', altitud: '2,750 msnm', destacado: 'Manantiales y vertientes de agua pura', distanciaCentro: '22 km' },
    { id: 7, nombre: 'Huayobamba', altitud: '2,200 msnm', destacado: 'Tradición ganadera y quesos artesanos', distanciaCentro: '6 km' },
    { id: 8, nombre: 'Igor', altitud: '2,500 msnm', destacado: 'Rutas de senderismo de alta montaña', distanciaCentro: '20 km' },
    { id: 9, nombre: 'Jacinto', altitud: '2,100 msnm', destacado: 'Campos frutícolas de chirimoya', distanciaCentro: '10 km' },
    { id: 10, nombre: 'Lajón', altitud: '1,900 msnm', destacado: 'Plantaciones de plátanos y guineos', distanciaCentro: '14 km' },
    { id: 11, nombre: 'La Colpa', altitud: '2,800 msnm', destacado: 'Punto panorámico más elevado', distanciaCentro: '25 km' },
    { id: 12, nombre: 'La Cortadera', altitud: '1,650 msnm', destacado: 'Cañón natural y paisajes rocosos', distanciaCentro: '16 km' },
    { id: 13, nombre: 'La Esperanza', altitud: '2,300 msnm', destacado: 'Cultivos de café orgánico de altura', distanciaCentro: '11 km' },
    { id: 14, nombre: 'La Fortuna', altitud: '2,450 msnm', destacado: 'Yacimientos y restos arqueológicos', distanciaCentro: '19 km' },
    { id: 15, nombre: 'La Loma Grande', altitud: '2,180 msnm', destacado: 'Jardines ecológicos y colinas verdes', distanciaCentro: '7 km' },
    { id: 16, nombre: 'La Leonera', altitud: '2,650 msnm', destacado: 'Mirador panorámico al valle principal', distanciaCentro: '21 km' },
    { id: 17, nombre: 'La Manzana Baja', altitud: '1,800 msnm', destacado: 'Molinos de piedra tradicionales', distanciaCentro: '13 km' },
    { id: 18, nombre: 'La Quida', altitud: '2,250 msnm', destacado: 'Tradiciones y festividades patronales', distanciaCentro: '9 km' },
    { id: 19, nombre: 'La Tuna', altitud: '2,550 msnm', destacado: 'Rutas de mulas y zonas para acampar', distanciaCentro: '17 km' },
    { id: 20, nombre: 'Tres Piedras', altitud: '2,080 msnm', destacado: 'Zona principal de cultivo de Lima Dulce', distanciaCentro: '5 km' },
    { id: 21, nombre: 'La Manzana Alta', altitud: '2,700 msnm', destacado: 'Extensas praderas y llanuras verdes', distanciaCentro: '15 km' }
  ];

  caserioSeleccionado: Caserio = this.caserios[0];

  get caseriosFiltrados(): Caserio[] {
    return this.caserios.filter(c =>
      c.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
    );
  }

  seleccionar(c: Caserio) {
    this.caserioSeleccionado = c;
  }
}