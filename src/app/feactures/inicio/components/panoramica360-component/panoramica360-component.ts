import { Component, OnInit, ElementRef, ViewChild, NgZone, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

// Definición de las 9 direcciones posibles
export type DireccionSector = 
  | 'arriba-izquierda' | 'arriba' | 'arriba-derecha'
  | 'izquierda'        | 'centro' | 'derecha'
  | 'abajo-izquierda'  | 'abajo'  | 'abajo-derecha';

@Component({
  selector: 'app-panoramica360-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panoramica360-component.html',
  styleUrl: './panoramica360-component.css',
})
export class Panoramica360Component implements OnInit, OnDestroy {
  @ViewChild('viewerContainer', { static: true }) viewerContainer!: ElementRef<HTMLDivElement>;

  imagenes: string[] = [
    'assets/INICIO/PANORAMICA_360/foto1.jpg',
    'assets/INICIO/PANORAMICA_360/foto2.jpg',
    'assets/INICIO/PANORAMICA_360/foto3.jpg',
    'assets/INICIO/PANORAMICA_360/foto4.jpg',
    'assets/INICIO/PANORAMICA_360/foto5.jpg',
    'assets/INICIO/PANORAMICA_360/foto6.jpg',
    'assets/INICIO/PANORAMICA_360/foto7.jpg',
    'assets/INICIO/PANORAMICA_360/foto8.jpg',
    'assets/INICIO/PANORAMICA_360/foto9.jpg',
  ];

  // 💡 MAPA DE VÍNCULOS: Asigna el índice de tu array `imagenes` a cada lado
  mapaDirecciones: Record<DireccionSector, number> = {
    'arriba-izquierda': 0,
    'arriba':           4,
    'arriba-derecha':   6,
    'izquierda':        3,
    'centro':           4, // Foto central o principal
    'derecha':          5,
    'abajo-izquierda':  2,
    'abajo':            1,
    'abajo-derecha':    7,
  };

  indiceActual = 4; // Empezamos en la foto del centro por defecto
  isDragging = false;
  startX = 0;
  
  private pxPerFrame = 35; 
  private accumulatedDelta = 0;
  private animationFrameId: number | null = null;
  private preloadedImages: HTMLImageElement[] = [];

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    this.preloadImages();
  }

  // Cargar una imagen específica directamente al hacer clic en uno de los 9 lados
  seleccionarImagenPorLado(sector: DireccionSector, event: Event) {
    event.stopPropagation(); // Evita interferir con el evento de arrastrar
    const index = this.mapaDirecciones[sector];
    if (index !== undefined && index < this.imagenes.length) {
      this.indiceActual = index;
    }
  }

  private preloadImages() {
    this.imagenes.forEach((src) => {
      const img = new Image();
      img.src = src;
      this.preloadedImages.push(img);
    });
  }

  onPointerDown(event: MouseEvent | TouchEvent) {
    this.isDragging = true;
    this.startX = this.getClientX(event);
    this.accumulatedDelta = 0;

    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('mousemove', this.onPointerMove);
      window.addEventListener('touchmove', this.onPointerMove, { passive: false });
      window.addEventListener('mouseup', this.onPointerUp);
      window.addEventListener('touchend', this.onPointerUp);
    });
  }

  private onPointerMove = (event: MouseEvent | TouchEvent) => {
    if (!this.isDragging) return;
    if (event.cancelable) event.preventDefault();

    const currentX = this.getClientX(event);
    const deltaX = currentX - this.startX;
    this.startX = currentX;

    this.accumulatedDelta += deltaX;

    if (Math.abs(this.accumulatedDelta) >= this.pxPerFrame) {
      const step = Math.trunc(this.accumulatedDelta / this.pxPerFrame);
      this.accumulatedDelta %= this.pxPerFrame;

      if (this.animationFrameId === null) {
        this.animationFrameId = requestAnimationFrame(() => {
          this.ngZone.run(() => {
            let nextIndex = (this.indiceActual - step) % this.imagenes.length;
            if (nextIndex < 0) nextIndex += this.imagenes.length;
            this.indiceActual = nextIndex;
          });
          this.animationFrameId = null;
        });
      }
    }
  };

  private onPointerUp = () => {
    this.isDragging = false;
    window.removeEventListener('mousemove', this.onPointerMove);
    window.removeEventListener('touchmove', this.onPointerMove);
    window.removeEventListener('mouseup', this.onPointerUp);
    window.removeEventListener('touchend', this.onPointerUp);
  };

  private getClientX(event: MouseEvent | TouchEvent): number {
    return event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
  }

  ngOnDestroy() {
    this.onPointerUp();
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }
}