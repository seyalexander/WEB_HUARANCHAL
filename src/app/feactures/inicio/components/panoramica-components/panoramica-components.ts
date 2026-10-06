import {
  AfterViewInit, Component, ElementRef, NgZone, OnDestroy, ViewChild, inject,
} from '@angular/core';
import { InicioPanoramica } from '../../../../shared/data/Inicio/Inicio-Panoramica.interface';
import { InicioPanoramicaHuaranchal } from '../../../../shared/data/Inicio/Inicio-Panoramica.data';

@Component({
  selector: 'app-panoramica-components',
  imports: [],
  templateUrl: './panoramica-components.html',
  styleUrl: './panoramica-components.css',
})
export class PanoramicaComponents implements AfterViewInit, OnDestroy {

  panoramica: InicioPanoramica = InicioPanoramicaHuaranchal;

  @ViewChild('seccion', { static: true }) seccion!: ElementRef<HTMLElement>;
  @ViewChild('pista', { static: true }) pista!: ElementRef<HTMLElement>;
  @ViewChild('regla', { static: true }) regla!: ElementRef<HTMLElement>;
  @ViewChild('marcador', { static: true }) marcador!: ElementRef<HTMLElement>;

  private zone = inject(NgZone);

  // Estado del movimiento
  private x = 0;                    // desplazamiento actual en px
  private velocidad = 0;            // inercia (px por frame a 60 fps)
  private arrastrando = false;
  private ultimoPointerX = 0;
  private direccionDeriva = 1;

  // Tiempos
  private ultimoFrame = 0;
  private ultimaInteraccion = 0;

  // Control
  private frameId: number | null = null;
  private reducirMovimiento = false;
  private observador?: IntersectionObserver;

  private readonly ESPERA_DERIVA_MS = 2500;
  private readonly VELOCIDAD_DERIVA = 16;   // px por segundo
  private readonly PASO_REGLA = 120;        // debe coincidir con el CSS

  ngAfterViewInit(): void {
    this.reducirMovimiento =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Todo fuera de Angular: no dispara detección de cambios
    this.zone.runOutsideAngular(() => {
      const el = this.seccion.nativeElement;

      el.addEventListener('pointerdown', this.alPresionar);
      el.addEventListener('pointermove', this.alMover);
      el.addEventListener('pointerup', this.alSoltar);
      el.addEventListener('pointercancel', this.alSoltar);
      el.addEventListener('keydown', this.alTeclear);

      // Solo anima mientras la sección es visible
      this.observador = new IntersectionObserver(
        ([entrada]) => (entrada.isIntersecting ? this.iniciar() : this.detener()),
        { threshold: 0.05 }
      );
      this.observador.observe(el);
    });

    this.pintar();
  }

  ngOnDestroy(): void {
    const el = this.seccion.nativeElement;

    this.detener();
    this.observador?.disconnect();

    el.removeEventListener('pointerdown', this.alPresionar);
    el.removeEventListener('pointermove', this.alMover);
    el.removeEventListener('pointerup', this.alSoltar);
    el.removeEventListener('pointercancel', this.alSoltar);
    el.removeEventListener('keydown', this.alTeclear);
  }

  // ============================================================
  // ENTRADA: ARRASTRE (mouse, táctil y lápiz con el mismo código)
  // ============================================================

  private alPresionar = (e: PointerEvent): void => {
    this.arrastrando = true;
    this.velocidad = 0;
    this.ultimoPointerX = e.clientX;
    this.marcarInteraccion();

    const el = this.seccion.nativeElement;
    el.setPointerCapture(e.pointerId);
    el.classList.remove('cursor-grab');
    el.classList.add('cursor-grabbing');
  };

  private alMover = (e: PointerEvent): void => {
    if (!this.arrastrando) return;

    const dx = e.clientX - this.ultimoPointerX;
    this.ultimoPointerX = e.clientX;

    this.x = this.limitar(this.x + dx);

    // Velocidad suavizada: es lo que se convierte en inercia al soltar
    this.velocidad = dx * 0.6 + this.velocidad * 0.4;

    this.marcarInteraccion();
    this.pintar();
  };

  private alSoltar = (e: PointerEvent): void => {
    if (!this.arrastrando) return;

    this.arrastrando = false;
    this.marcarInteraccion();

    const el = this.seccion.nativeElement;
    if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
    el.classList.remove('cursor-grabbing');
    el.classList.add('cursor-grab');
  };

  private alTeclear = (e: KeyboardEvent): void => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;

    e.preventDefault();
    this.velocidad += e.key === 'ArrowLeft' ? 10 : -10;
    this.marcarInteraccion();
  };

  // ============================================================
  // BUCLE DE ANIMACIÓN
  // ============================================================

  private iniciar(): void {
    if (this.frameId !== null) return;

    this.ultimoFrame = performance.now();
    this.ultimaInteraccion = this.ultimoFrame;
    this.frameId = requestAnimationFrame(this.bucle);
  }

  private detener(): void {
    if (this.frameId === null) return;

    cancelAnimationFrame(this.frameId);
    this.frameId = null;
  }

  private bucle = (ahora: number): void => {
    // dt acotado: si la pestaña estuvo en segundo plano no hay saltos
    const dt = Math.min((ahora - this.ultimoFrame) / 1000, 0.05);
    this.ultimoFrame = ahora;

    if (!this.arrastrando) {

      if (Math.abs(this.velocidad) > 0.05) {
        // Inercia
        this.x = this.limitar(this.x + this.velocidad * dt * 60);
        this.velocidad *= Math.pow(0.94, dt * 60);

        if (Math.abs(this.x) >= this.maximo()) this.velocidad = 0;

      } else {
        this.velocidad = 0;

        // Deriva automática tras un rato sin interacción
        const inactivo = ahora - this.ultimaInteraccion - this.ESPERA_DERIVA_MS;

        if (!this.reducirMovimiento && inactivo > 0) {
          // Arranca poco a poco, no de golpe
          const arranque = Math.min(inactivo / 1500, 1);
          this.derivar(dt * arranque);
        }
      }
    }

    this.pintar();
    this.frameId = requestAnimationFrame(this.bucle);
  };

  private derivar(dt: number): void {
    const max = this.maximo();
    this.x += this.direccionDeriva * this.VELOCIDAD_DERIVA * dt;

    if (this.x >= max) {
      this.x = max;
      this.direccionDeriva = -1;
    } else if (this.x <= -max) {
      this.x = -max;
      this.direccionDeriva = 1;
    }
  }

  // ============================================================
  // PINTADO DIRECTO EN EL DOM
  // ============================================================

  private pintar(): void {
    const max = this.maximo();
    this.x = this.limitar(this.x);

    this.pista.nativeElement.style.transform = `translate3d(${this.x}px,0,0)`;

    // La regla se mueve con la imagen y se repite cada PASO_REGLA
    this.regla.nativeElement.style.transform =
      `translate3d(${this.x % this.PASO_REGLA}px,0,0)`;

    // x = +max muestra el extremo izquierdo → progreso 0
    const progreso = max > 0 ? (max - this.x) / (2 * max) : 0.5;
    this.marcador.nativeElement.style.left = `${progreso * 100}%`;
  }

  // ============================================================
  // UTILIDADES
  // ============================================================

  /** Cuánto puede desplazarse la imagen hacia cada lado sin mostrar bordes vacíos */
  private maximo(): number {
    const imagen = this.pista.nativeElement.offsetWidth;
    const ventana = this.seccion.nativeElement.clientWidth;

    return Math.max((imagen - ventana) / 2, 0);
  }

  private limitar(valor: number): number {
    const max = this.maximo();
    return Math.max(-max, Math.min(max, valor));
  }

  private marcarInteraccion(): void {
    this.ultimaInteraccion = performance.now();
  }
}