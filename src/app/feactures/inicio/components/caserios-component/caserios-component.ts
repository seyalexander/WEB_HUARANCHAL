import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { Caserio } from '../../../../shared/data/Inicio/Inicio-Caserios.interface';
import { caseriosHuaranchal } from '../../../../shared/data/Inicio/Inicio-Caserios.data';

interface PuntoCaserio {
    caserio: Caserio;
    altitudM: number;
    km: number;
    /** posición horizontal en % */
    x: number;
    /** posición vertical en % */
    y: number;
}

interface Coordenada {
    x: number;
    y: number;
}

@Component({
    selector: 'app-caserios-component',
    standalone: true,
    imports: [CommonModule, AnimateOnScrollModule],
    templateUrl: './caserios-component.html',
    styleUrl: './caserios-component.css',
})
export class CaseriosComponent {

    // Márgenes del gráfico (en %). Importante: declarar antes de usarlos.
    private readonly xMin = 7;
    private readonly xMax = 96;
    private readonly yAlto = 20;   // y del caserío más alto
    private readonly yBajo = 76;   // y del caserío más bajo

    caserios: Caserio[] = caseriosHuaranchal;

    /** Datos numéricos extraídos de los textos ('2,140 msnm', '12 km'), ordenados por distancia */
    private readonly datos = this.caserios
        .map(c => ({
            caserio: c,
            altitudM: parseInt(c.altitud.replace(/\D/g, ''), 10),
            km: parseFloat(c.distanciaCentro),
        }))
        .sort((a, b) => a.km - b.km || a.altitudM - b.altitudM);

    readonly minAlt = Math.min(...this.datos.map(d => d.altitudM));
    readonly maxAlt = Math.max(...this.datos.map(d => d.altitudM));
    readonly maxKm = Math.max(...this.datos.map(d => d.km));
    readonly desnivel = this.maxAlt - this.minAlt;

    readonly puntos: PuntoCaserio[] = this.construirPuntos();

    readonly masAlto = this.puntos.reduce((a, b) => (b.altitudM > a.altitudM ? b : a));
    readonly masBajo = this.puntos.reduce((a, b) => (b.altitudM < a.altitudM ? b : a));

    /** Marcas del eje horizontal cada 5 km */
    readonly ticks = Array.from(
        { length: Math.floor(this.maxKm / 5) + 1 },
        (_, i) => ({ km: i * 5, x: this.xDe(i * 5) })
    );

    /** Líneas guía de altitud */
    readonly guias = [1800, 2200, 2600].map(m => ({
        y: this.yDe(m),
        etiqueta: String(m).replace(/\B(?=(\d{3})+(?!\d))/g, ','),
    }));

    // --- Siluetas SVG ---------------------------------------------------

    private readonly cresta: Coordenada[] = [
        { x: 0, y: this.puntos[0].y + 8 },
        ...this.puntos,
        { x: 100, y: this.puntos[this.puntos.length - 1].y + 8 },
    ];

    readonly lineaFrente = this.cresta
        .map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x} ${p.y}`)
        .join(' ');

    readonly areaFrente = `${this.lineaFrente} L100 100 L0 100 Z`;

    /** Cordillera lejana: la misma cresta suavizada y más alta, para dar profundidad */
    private readonly cordilleraFondo: Coordenada[] = this.cresta.map((p, i, arr) => {
        const vecinos = [arr[i - 1], p, arr[i + 1]].filter((v): v is Coordenada => !!v);
        return {
            x: p.x,
            y: vecinos.reduce((s, v) => s + v.y, 0) / vecinos.length - 10,
        };
    });

    readonly areaFondo =
        this.cordilleraFondo
            .map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x} ${p.y}`)
            .join(' ') + ' L100 100 L0 100 Z';

    // --- Selección ------------------------------------------------------

    seleccionado: PuntoCaserio = this.puntos[0];

    get posicion(): number {
        return this.puntos.indexOf(this.seleccionado) + 1;
    }

    seleccionar(punto: PuntoCaserio): void {
        this.seleccionado = punto;
    }

    mover(delta: number): void {
        const total = this.puntos.length;
        const i = this.puntos.indexOf(this.seleccionado);
        this.seleccionado = this.puntos[(i + delta + total) % total];
    }

    // --- Utilidades -----------------------------------------------------

    private xDe(km: number): number {
        return this.xMin + (km / this.maxKm) * (this.xMax - this.xMin);
    }

    private yDe(altitud: number): number {
        return this.yBajo - ((altitud - this.minAlt) / this.desnivel) * (this.yBajo - this.yAlto);
    }

    /** Separa horizontalmente los caseríos que están a la misma distancia */
    private construirPuntos(): PuntoCaserio[] {
        const separacionMin = 2.4;
        let xAnterior = -Infinity;

        return this.datos.map(d => {
            const x = Math.max(this.xDe(d.km), xAnterior + separacionMin);
            xAnterior = x;
            return { ...d, x, y: this.yDe(d.altitudM) };
        });
    }
}