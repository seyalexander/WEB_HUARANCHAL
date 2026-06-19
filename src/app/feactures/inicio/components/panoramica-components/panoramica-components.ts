import { Component } from '@angular/core';

@Component({
  selector: 'app-panoramica-components',
  imports: [],
  templateUrl: './panoramica-components.html',
  styleUrl: './panoramica-components.css',
})
export class PanoramicaComponents {

  translateX = 0;

  currentX = 0;
  targetX = 0;

  animationFrameId: number | null = null;

  ngOnInit() {
    this.animate();
  }

  onPanoramaMove(event: MouseEvent) {

    const container =
      event.currentTarget as HTMLElement;

    const rect =
      container.getBoundingClientRect();

    const percent =
      (event.clientX - rect.left) / rect.width;

    /**
     * 180% => sobra 80%
     * usamos aprox 40% por lado
     */
    const maxOffset =
      rect.width * 0.40;

    this.targetX =
      (0.5 - percent) * maxOffset;
  }

  onPanoramaLeave() {
    this.targetX = 0;
  }

  animate = () => {

    /**
     * Suavizado tipo cámara
     */

    this.currentX +=
      (this.targetX - this.currentX) * 0.04;

    this.translateX = this.currentX;

    this.animationFrameId =
      requestAnimationFrame(this.animate);
  };

  ngOnDestroy() {

    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }

  }

}