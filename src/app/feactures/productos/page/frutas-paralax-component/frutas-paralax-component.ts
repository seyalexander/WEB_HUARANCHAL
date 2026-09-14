import { CommonModule, NgStyle } from '@angular/common';
import { Component, HostListener } from '@angular/core';

export interface Fruta {
  id: number;
  nombre: string;
  nombreCientifico: string;
  temporada: string;
  descripcion: string;
  beneficios: string[];
  imagen: string;
  colorGlow: string; // Color HEX para el resplandor de fondo
}

@Component({
  selector: 'app-frutas-paralax-component',
  imports: [CommonModule, NgStyle],
  templateUrl: './frutas-paralax-component.html',
  styleUrl: './frutas-paralax-component.css',
})
export class FrutasParalaxComponent {
  mouseX = 0;
  mouseY = 0;

  frutas: Fruta[] = [
    {
      id: 0,
      nombre: 'Palta Hass',
      nombreCientifico: 'Persea americana',
      temporada: 'Marzo - Agosto',
      descripcion: 'Cultivada en los valles cálidos de Huaranchal, nuestra palta destaca por su textura cremosa insuperable y su alto contenido de grasas saludables.',
      beneficios: ['Rica en Omega 3', 'Cero colesterol', 'Textura Mantequilla'],
      imagen: 'assets/INICIO/FRUTAS/palta.png',
      colorGlow: '#22c55e'
    },
    {
      id: 1,
      nombre: 'Chirimoya Cumbe',
      nombreCientifico: 'Annona cherimola',
      temporada: 'Abril - Julio',
      descripcion: 'Conocida como la joya de los Andes, la chirimoya de Huaranchal posee un dulzor natural equilibrado con aromas tropicales únicos.',
      beneficios: ['Alta en Vitamina C', 'Potente antioxidante', 'Fibra natural'],
      imagen: 'assets/INICIO/FRUTAS/chirimoya.png',
      colorGlow: '#84cc16'
    },
    {
      id: 2,
      nombre: 'Granadilla Dulce',
      nombreCientifico: 'Passiflora ligularis',
      temporada: 'Todo el año',
      descripcion: 'Fruta aromática de cáscara dorada. Sus pulpas jugosas son apreciadas por su sabor refrescante y sus propiedades digestivas tranquilizantes.',
      beneficios: ['Excelente digestivo', 'Fuente de Fósforo', 'Efecto relajante'],
      imagen: 'assets/INICIO/FRUTAS/granadilla.png',
      colorGlow: '#eab308'
    },
    {
      id: 3,
      nombre: 'Lima Dulce',
      nombreCientifico: 'Citrus limetta',
      temporada: 'Mayo - Septiembre',
      descripcion: 'Cítrico emblemático de baja acidez y alto contenido de jugo, cultivado bajo el sol mediterráneo del valle.',
      beneficios: ['Hidratación pura', 'Baja acidez', 'Vitamina C directa'],
      imagen: 'assets/INICIO/FRUTAS/lima.png',
      colorGlow: '#a3e635'
    }
  ];

  indiceSeleccionado = 0;

  get frutaActiva(): Fruta {
    return this.frutas[this.indiceSeleccionado];
  }

  // Captura el movimiento del cursor para crear el efecto Parallax 3D
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const { innerWidth, innerHeight } = window;
    this.mouseX = (event.clientX / innerWidth - 0.5) * 30; // Desplazamiento máx ±15px
    this.mouseY = (event.clientY / innerHeight - 0.5) * 30;
  }

  seleccionarFruta(index: number) {
    this.indiceSeleccionado = index;
  }

  siguiente() {
    this.indiceSeleccionado = (this.indiceSeleccionado + 1) % this.frutas.length;
  }

  anterior() {
    this.indiceSeleccionado = (this.indiceSeleccionado - 1 + this.frutas.length) % this.frutas.length;
  }

  // Cálculo de rotación y posición en 3D para la Rueda
  getTransformEstilo(index: number) {
    const total = this.frutas.length;
    let diff = index - this.indiceSeleccionado;

    // Corrección para comportamiento circular continuo
    if (diff < -total / 2) diff += total;
    if (diff > total / 2) diff -= total;

    const angle = diff * (360 / total); // Ángulo en el círculo
    const isSelected = index === this.indiceSeleccionado;

    const scale = isSelected ? 1.2 : 0.65;
    const opacity = isSelected ? 1 : 0.35;
    const zIndex = isSelected ? 30 : 10 - Math.abs(diff);

    return {
      transform: `rotate(${angle}deg) translateY(-140px) rotate(-${angle}deg) scale(${scale})`,
      opacity: `${opacity}`,
      'z-index': `${zIndex}`
    };
  }
}
