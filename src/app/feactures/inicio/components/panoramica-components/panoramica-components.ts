import { Component } from '@angular/core';
import { InicioPanoramica } from '../../../../shared/data/Inicio/Inicio-Panoramica.interface';
import { InicioPanoramicaHuaranchal } from '../../../../shared/data/Inicio/Inicio-Panoramica.data';

@Component({
  selector: 'app-panoramica-components',
  imports: [],
  templateUrl: './panoramica-components.html',
  styleUrl: './panoramica-components.css',
})
export class PanoramicaComponents {

  panoramica: InicioPanoramica = InicioPanoramicaHuaranchal;

  translateX = 0;

  currentX = 0;
  targetX = 0;

  animationFrameId: number | null = null;

  private touchStartX = 0;
  private touchStartTranslateX = 0;
  private isTouching = false;

  ngOnInit(): void {
    this.animate();
  }


  // ============================================================
  // MOVIMIENTO CON MOUSE - DESKTOP
  // ============================================================

  onPanoramaMove(event: MouseEvent): void {

    const container =
      event.currentTarget as HTMLElement;

    const rect =
      container.getBoundingClientRect();

    const percent =
      (event.clientX - rect.left) / rect.width;

    const maxOffset =
      rect.width * 0.40;

    this.targetX =
      (0.5 - percent) * maxOffset;
  }


  onPanoramaLeave(): void {

    this.targetX = 0;
  }


  // ============================================================
  // MOVIMIENTO TÁCTIL - MOBILE
  // ============================================================

  onPanoramaTouchStart(event: TouchEvent): void {

    if (event.touches.length !== 1) {
      return;
    }

    this.isTouching = true;

    this.touchStartX =
      event.touches[0].clientX;

    this.touchStartTranslateX =
      this.targetX;
  }


  onPanoramaTouchMove(event: TouchEvent): void {

    if (
      !this.isTouching ||
      event.touches.length !== 1
    ) {
      return;
    }

    const currentTouchX =
      event.touches[0].clientX;

    const difference =
      currentTouchX - this.touchStartX;

    const sensitivity = 1.4;

    let newPosition =
      this.touchStartTranslateX +
      (difference * sensitivity);

    const container =
      event.currentTarget as HTMLElement;

    const rect =
      container.getBoundingClientRect();

    const maxOffset =
      rect.width * 0.65;

    newPosition =
      Math.max(
        -maxOffset,
        Math.min(maxOffset, newPosition)
      );

    this.targetX = newPosition;
  }


  onPanoramaTouchEnd(): void {

    this.isTouching = false;
  }


  // ============================================================
  // ANIMACIÓN SUAVE
  // ============================================================

  animate = (): void => {

    this.currentX +=
      (this.targetX - this.currentX) * 0.04;

    this.translateX =
      this.currentX;

    this.animationFrameId =
      requestAnimationFrame(this.animate);
  };


  // ============================================================
  // DESTRUIR ANIMACIÓN
  // ============================================================

  ngOnDestroy(): void {

    if (this.animationFrameId !== null) {

      cancelAnimationFrame(
        this.animationFrameId
      );

      this.animationFrameId = null;
    }
  }


}