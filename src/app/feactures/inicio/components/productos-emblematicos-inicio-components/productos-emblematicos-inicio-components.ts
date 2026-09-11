import { Component } from '@angular/core';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

interface Producto {
    nombre: string;
    descripcion: string;
    imagen: string;
    personaje: string;
    fruta: string;
    animacion: string;
}

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
    imports: [AnimateOnScrollModule],
    templateUrl: './productos-emblematicos-inicio-components.html',
    styleUrl: './productos-emblematicos-inicio-components.css',
})
export class ProductosEmblematicosInicioComponents {

    particulasFruta: ParticulaFruta[] = [];
    productoActivo: Producto | null = null;

    productos: Producto[] = [

        {
            nombre: 'Café',
            descripcion: 'Uno de los productos más representativos del distrito.',
            imagen: 'assets/CAFE-IMG.jpg',
            personaje: 'assets/INICIO/PRODUCTOS/personaje-cafe.png',
            fruta: 'assets/INICIO/PRODUCTOS/CAFE/producto_cafe_01.png',
            animacion: 'slide-in-from-l-20'
        },

        {
            nombre: 'Naranja',
            descripcion: 'Fruta emblemática del distrito, apreciada por su dulzura y frescura.',
            imagen: 'assets/NARANJA-IMG.jpg',
            personaje: 'assets/INICIO/PRODUCTOS/personaje-naranja.png',
            fruta: 'assets/INICIO/PRODUCTOS/NARANJA/producto_naranja_01.png',
            animacion: 'slide-in-from-l-20'
        },

        {
            nombre: 'Granadilla',
            descripcion: 'Conocida por su sabor delicado y propiedades nutritivas.',
            imagen: 'assets/GRANADILLAS-IMG.avif',
            personaje: 'assets/INICIO/PRODUCTOS/personaje-granadilla.png',
            fruta: 'assets/INICIO/PRODUCTOS/GRANADILLA/producto_granadilla_01.png',
            animacion: 'slide-in-from-r-20'
        },

        {
            nombre: 'Lima',
            descripcion: 'Producto tradicional utilizado en la gastronomía regional.',
            imagen: 'assets/LIMAS-IMG.jpg',
            personaje: 'assets/INICIO/PRODUCTOS/personaje-lima.png',
            fruta: 'assets/INICIO/PRODUCTOS/LIMA/producto_lima_01.png',
            animacion: 'slide-in-from-r-20'
        }

    ];

    activarFruta(producto: Producto): void {

        this.productoActivo = producto;

        this.particulasFruta = Array.from({ length: 18 }, (_, i) => ({
            id: Date.now() + i,

            // Punto inicial: centro de la tarjeta
            x: 50,
            y: 55,

            // Dirección aleatoria de salida
            destinoX: -180 + Math.random() * 360,
            destinoY: -100 - Math.random() * 220,

            // Rotación aleatoria
            rotacion: Math.random() * 360,

            // Tamaño aleatorio
            escala: 0.45 + Math.random() * 0.65,

            // Duración aleatoria
            duracion: 900 + Math.random() * 700,

            // Pequeño retraso entre partículas
            retraso: Math.random() * 120
        }));

        setTimeout(() => {
            this.particulasFruta = [];
            this.productoActivo = null;
        }, 1900);
    }

}