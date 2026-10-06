import { Component } from '@angular/core';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { RouterLink } from '@angular/router';
import { InicioProductoEmblematico } from '../../../../shared/data/Inicio/Inicio-ProductosEmblematicos.interface';
import { productosEmblematicosHuaranchal } from '../../../../shared/data/Inicio/Inicio-ProdicyosEmblematicos.data';

interface ParticulaFruta {
    id: number;
    x: number;
    y: number;
    destinoX: number;
    destinoY: number;
    rotacion: number;
    escala: number;
    duracion: number;
    retraso: number;
}

@Component({
    selector: 'app-productos-emblematicos-inicio-components',
    imports: [AnimateOnScrollModule, RouterLink],
    templateUrl: './productos-emblematicos-inicio-components.html',
    styleUrl: './productos-emblematicos-inicio-components.css',
})
export class ProductosEmblematicosInicioComponents {

    productos: InicioProductoEmblematico[] = productosEmblematicosHuaranchal;

    particulasFruta: ParticulaFruta[] = [];
    productoActivo: InicioProductoEmblematico | null = null;

    /** Índice del panel expandido (empieza con el primero abierto) */
    activo = 0;

    private temporizador?: ReturnType<typeof setTimeout>;

    seleccionar(indice: number, producto: InicioProductoEmblematico): void {
        this.activo = indice;
        this.activarFruta(producto);
    }

    activarFruta(producto: InicioProductoEmblematico): void {

        clearTimeout(this.temporizador);

        this.productoActivo = producto;

        this.particulasFruta = Array.from({ length: 18 }, (_, i) => ({
            id: Date.now() + i,
            x: 50,
            y: 55,
            destinoX: -180 + Math.random() * 360,
            destinoY: -100 - Math.random() * 220,
            rotacion: Math.random() * 360,
            escala: 0.45 + Math.random() * 0.65,
            duracion: 900 + Math.random() * 700,
            retraso: Math.random() * 120
        }));

        this.temporizador = setTimeout(() => {
            this.particulasFruta = [];
            this.productoActivo = null;
        }, 1900);
    }
}