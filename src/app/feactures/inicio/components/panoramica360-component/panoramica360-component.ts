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


    panoramica: InicioPanoramica360 =
        InicioPanoramica360Huaranchal;


    indiceActual = 4;

    isDragging = false;

    startX = 0;


    private pxPerFrame = 35;

    private accumulatedDelta = 0;

    private animationFrameId: number | null = null;

    private preloadedImages: HTMLImageElement[] = [];


    constructor(
        private ngZone: NgZone
    ) {}


    get imagenes(): string[] {

        return this.panoramica.imagenes.map(
            imagen => imagen.imagen
        );

    }


    get mapaDirecciones(): Record<DireccionSector, number> {

        return this.panoramica.mapaDirecciones;

    }


    get imagenActual() {

        return this.panoramica.imagenes[this.indiceActual];

    }


    ngOnInit(): void {

        this.preloadImages();

    }


    seleccionarImagenPorLado(
        sector: DireccionSector,
        event: Event
    ): void {

        event.stopPropagation();

        const index =
            this.mapaDirecciones[sector];

        if (
            index !== undefined &&
            index < this.imagenes.length
        ) {

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


    onPointerDown(
        event: MouseEvent | TouchEvent
    ): void {

        this.isDragging = true;

        this.startX =
            this.getClientX(event);

        this.accumulatedDelta = 0;


        this.ngZone.runOutsideAngular(() => {

            window.addEventListener(
                'mousemove',
                this.onPointerMove
            );

            window.addEventListener(
                'touchmove',
                this.onPointerMove,
                { passive: false }
            );

            window.addEventListener(
                'mouseup',
                this.onPointerUp
            );

            window.addEventListener(
                'touchend',
                this.onPointerUp
            );

        });

    }


    private onPointerMove =
        (event: MouseEvent | TouchEvent): void => {

            if (!this.isDragging) {
                return;
            }


            if (event.cancelable) {
                event.preventDefault();
            }


            const currentX =
                this.getClientX(event);

            const deltaX =
                currentX - this.startX;


            this.startX = currentX;

            this.accumulatedDelta += deltaX;


            if (
                Math.abs(this.accumulatedDelta)
                >= this.pxPerFrame
            ) {

                const step =
                    Math.trunc(
                        this.accumulatedDelta /
                        this.pxPerFrame
                    );


                this.accumulatedDelta %=
                    this.pxPerFrame;


                if (
                    this.animationFrameId === null
                ) {

                    this.animationFrameId =
                        requestAnimationFrame(() => {

                            this.ngZone.run(() => {

                                let nextIndex =
                                    (
                                        this.indiceActual -
                                        step
                                    ) %
                                    this.imagenes.length;


                                if (nextIndex < 0) {

                                    nextIndex +=
                                        this.imagenes.length;

                                }


                                this.indiceActual =
                                    nextIndex;

                            });


                            this.animationFrameId =
                                null;

                        });

                }

            }

        };


    private onPointerUp = (): void => {

        this.isDragging = false;


        window.removeEventListener(
            'mousemove',
            this.onPointerMove
        );

        window.removeEventListener(
            'touchmove',
            this.onPointerMove
        );

        window.removeEventListener(
            'mouseup',
            this.onPointerUp
        );

        window.removeEventListener(
            'touchend',
            this.onPointerUp
        );

    };


    private getClientX(
        event: MouseEvent | TouchEvent
    ): number {

        return event instanceof MouseEvent
            ? event.clientX
            : event.touches[0].clientX;

    }


    ngOnDestroy(): void {

        this.onPointerUp();


        if (
            this.animationFrameId !== null
        ) {

            cancelAnimationFrame(
                this.animationFrameId
            );

            this.animationFrameId = null;

        }

    }

}