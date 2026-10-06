import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    NgZone,
    OnDestroy
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
    InicioPanoramica360Huaranchal
} from '../../../../shared/data/Inicio/Inicio-Panoramica360.data';
import { DireccionSector, InicioPanoramica360 } from '../../../../shared/data/Inicio/Inicio-Panoramica360.interface';

interface SectorUI {
    id: DireccionSector;
    rotacion: number;
}

@Component({
    selector: 'app-panoramica360-component',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './panoramica360-component.html',
    styleUrl: './panoramica360-component.css',
})
export class Panoramica360Component implements OnInit, OnDestroy {

    @ViewChild('viewerContainer', { static: true })
    viewerContainer!: ElementRef<HTMLDivElement>;

    @ViewChild('capaImagenes', { static: true })
    capaImagenes!: ElementRef<HTMLDivElement>;

    panoramica: InicioPanoramica360 = InicioPanoramica360Huaranchal;

    indiceActual = 4;

    isDragging = false;
    startX = 0;

    /** Orden de la cuadrícula 3x3 (por filas), con la rotación de la flecha de cada botón */
    readonly sectores: SectorUI[] = [
        { id: 'arriba-izquierda', rotacion: -45 },
        { id: 'arriba',           rotacion: 0 },
        { id: 'arriba-derecha',   rotacion: 45 },
        { id: 'izquierda',        rotacion: -90 },
        { id: 'centro',           rotacion: 0 },
        { id: 'derecha',          rotacion: 90 },
        { id: 'abajo-izquierda',  rotacion: -135 },
        { id: 'abajo',            rotacion: 180 },
        { id: 'abajo-derecha',    rotacion: 135 },
    ];

    // ============================================================
    // ESTADO DEL GIROSCOPIO
    // ============================================================

    esTactil = false;
    giroSoportado = false;
    giroActivo = false;
    giroDenegado = false;
    giroSinDatos = false;

    /** Grados de inclinación necesarios para pasar al sector vecino */
    private readonly UMBRAL_ENTRAR = 14;
    /** Grados por debajo de los cuales se vuelve al centro (evita parpadeos en el límite) */
    private readonly UMBRAL_SALIR = 9;

    /** Si al probar en el móvil la vista va al lado contrario, pon true */
    private readonly INVERTIR_X = false;
    private readonly INVERTIR_Y = false;

    private base: { beta: number; gamma: number } | null = null;
    private suave = { x: 0, y: 0 };
    private estadoX: -1 | 0 | 1 = 0;
    private estadoY: -1 | 0 | 1 = 0;
    private recibioDatos = false;
    private temporizadorDatos?: ReturnType<typeof setTimeout>;
    private reducirMovimiento = false;

    // ============================================================
    // ARRASTRE
    // ============================================================

    private pxPerFrame = 35;
    private accumulatedDelta = 0;
    private animationFrameId: number | null = null;
    private preloadedImages: HTMLImageElement[] = [];

    constructor(private ngZone: NgZone) {}

    get imagenes(): string[] {
        return this.panoramica.imagenes.map(imagen => imagen.imagen);
    }

    get mapaDirecciones(): Record<DireccionSector, number> {
        return this.panoramica.mapaDirecciones;
    }

    get imagenActual() {
        return this.panoramica.imagenes[this.indiceActual];
    }

    /** Botón "Activar movimiento": solo en táctil, si hay giroscopio y no se ha rechazado */
    get puedeOfrecerGiro(): boolean {
        return this.esTactil && this.giroSoportado && !this.giroActivo
            && !this.giroDenegado && !this.giroSinDatos;
    }

    esActivo(sector: DireccionSector): boolean {
        return this.indiceActual === this.mapaDirecciones[sector];
    }

    ngOnInit(): void {
        this.preloadImages();

        if (typeof window !== 'undefined') {
            this.esTactil = window.matchMedia('(pointer: coarse)').matches;
            this.giroSoportado = 'DeviceOrientationEvent' in window;
            this.reducirMovimiento =
                window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        }
    }

    seleccionarImagenPorLado(sector: DireccionSector, event: Event): void {
        event.stopPropagation();

        const index = this.mapaDirecciones[sector];

        if (index !== undefined && index < this.imagenes.length) {
            this.indiceActual = index;
        }
    }

    private preloadImages(): void {
        this.imagenes.forEach(src => {
            const img = new Image();
            img.src = src;
            this.preloadedImages.push(img);
        });
    }

    // ============================================================
    // GIROSCOPIO
    // ============================================================

    async activarGiro(): Promise<void> {

        // iOS 13+ exige pedir permiso desde un gesto del usuario
        const Evento = DeviceOrientationEvent as unknown as {
            requestPermission?: () => Promise<'granted' | 'denied'>;
        };

        if (typeof Evento.requestPermission === 'function') {
            try {
                const permiso = await Evento.requestPermission();

                if (permiso !== 'granted') {
                    this.ngZone.run(() => (this.giroDenegado = true));
                    return;
                }
            } catch {
                this.ngZone.run(() => (this.giroDenegado = true));
                return;
            }
        }

        this.ngZone.run(() => {
            this.giroDenegado = false;
            this.giroSinDatos = false;
            this.giroActivo = true;
        });

        this.base = null;
        this.recibioDatos = false;
        this.suave = { x: 0, y: 0 };
        this.estadoX = 0;
        this.estadoY = 0;

        this.ngZone.runOutsideAngular(() => {
            window.addEventListener('deviceorientation', this.alOrientar);
        });

        // Si en 2 segundos no llega ningún dato, el dispositivo no tiene sensor utilizable
        this.temporizadorDatos = setTimeout(() => {
            if (!this.recibioDatos) {
                this.ngZone.run(() => {
                    this.desactivarGiro();
                    this.giroSinDatos = true;
                });
            }
        }, 2000);
    }

    desactivarGiro(): void {
        window.removeEventListener('deviceorientation', this.alOrientar);
        clearTimeout(this.temporizadorDatos);

        this.giroActivo = false;
        this.base = null;
        this.capaImagenes.nativeElement.style.transform = '';
    }

    /** Fija la posición actual del celular como el centro */
    recentrar(): void {
        this.base = null;
        this.suave = { x: 0, y: 0 };
        this.estadoX = 0;
        this.estadoY = 0;
    }

    private alOrientar = (e: DeviceOrientationEvent): void => {

        if (e.beta === null || e.gamma === null) return;

        this.recibioDatos = true;

        // El primer dato fija el "centro": cómo sostiene el celular quien lo activó
        if (!this.base) {
            this.base = { beta: e.beta, gamma: e.gamma };
        }

        // gamma: inclinación a los lados (derecha = positivo)
        // beta: inclinación adelante/atrás (parte superior hacia afuera = positivo)
        const dx = this.normalizar(e.gamma - this.base.gamma) * (this.INVERTIR_X ? -1 : 1);
        const dy = this.normalizar(e.beta - this.base.beta) * (this.INVERTIR_Y ? -1 : 1);

        // Filtro: quita el temblor de la mano
        this.suave.x += (dx - this.suave.x) * 0.2;
        this.suave.y += (dy - this.suave.y) * 0.2;

        // Desplazamiento sutil de la imagen: da continuidad entre sectores
        if (!this.reducirMovimiento) {
            const tx = this.limitar(-this.suave.x * 0.8, 18);
            const ty = this.limitar(this.suave.y * 0.8, 18);

            this.capaImagenes.nativeElement.style.transform =
                `translate3d(${tx}px, ${ty}px, 0) scale(1.08)`;
        }

        // Sector según la inclinación
        this.estadoX = this.siguienteEstado(this.estadoX, this.suave.x);
        this.estadoY = this.siguienteEstado(this.estadoY, this.suave.y);

        const fila = this.estadoY === 1 ? 'arriba' : this.estadoY === -1 ? 'abajo' : '';
        const columna = this.estadoX === 1 ? 'derecha' : this.estadoX === -1 ? 'izquierda' : '';

        const sector = (fila && columna
            ? `${fila}-${columna}`
            : fila || columna || 'centro') as DireccionSector;

        const indice = this.mapaDirecciones[sector];

        if (indice !== undefined && indice !== this.indiceActual) {
            this.ngZone.run(() => (this.indiceActual = indice));
        }
    };

    /** Histéresis: se entra a un sector con 14° y se sale con 9° */
    private siguienteEstado(actual: -1 | 0 | 1, valor: number): -1 | 0 | 1 {
        const entrar = this.UMBRAL_ENTRAR;
        const salir = this.UMBRAL_SALIR;

        if (actual === 0) {
            return valor > entrar ? 1 : valor < -entrar ? -1 : 0;
        }

        if (actual === 1) {
            return valor < salir ? (valor < -entrar ? -1 : 0) : 1;
        }

        return valor > -salir ? (valor > entrar ? 1 : 0) : -1;
    }

    /** Lleva un ángulo al rango [-180, 180] */
    private normalizar(grados: number): number {
        return ((grados + 540) % 360) - 180;
    }

    private limitar(valor: number, max: number): number {
        return Math.max(-max, Math.min(max, valor));
    }

    // ============================================================
    // ARRASTRE (ratón y dedo), sin cambios
    // ============================================================

    onPointerDown(event: MouseEvent | TouchEvent): void {

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

    private onPointerMove = (event: MouseEvent | TouchEvent): void => {

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

                        let nextIndex =
                            (this.indiceActual - step) % this.imagenes.length;

                        if (nextIndex < 0) nextIndex += this.imagenes.length;

                        this.indiceActual = nextIndex;
                    });

                    this.animationFrameId = null;
                });
            }
        }
    };

    private onPointerUp = (): void => {

        this.isDragging = false;

        window.removeEventListener('mousemove', this.onPointerMove);
        window.removeEventListener('touchmove', this.onPointerMove);
        window.removeEventListener('mouseup', this.onPointerUp);
        window.removeEventListener('touchend', this.onPointerUp);
    };

    private getClientX(event: MouseEvent | TouchEvent): number {
        return event instanceof MouseEvent
            ? event.clientX
            : event.touches[0].clientX;
    }

    ngOnDestroy(): void {

        this.onPointerUp();
        this.desactivarGiro();

        if (this.animationFrameId !== null) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
    }
}