import { Component } from '@angular/core';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

interface Producto {
    nombre: string;
    descripcion: string;
    imagen: string;
    personaje: string;
    animacion: string;
}

@Component({
    selector: 'app-productos-emblematicos-inicio-components',
    imports: [AnimateOnScrollModule],
    templateUrl: './productos-emblematicos-inicio-components.html',
    styleUrl: './productos-emblematicos-inicio-components.css',
})
export class ProductosEmblematicosInicioComponents {

    productos: Producto[] = [

        {
            nombre: 'Café',
            descripcion: 'Uno de los productos más representativos del distrito.',
            imagen: 'assets/CAFE-IMG.jpg',
            personaje: 'assets/INICIO/PRODUCTOS/personaje-cafe.png',
            animacion: 'slide-in-from-l-20'
        },

        {
            nombre: 'Naranja',
            descripcion: 'Fruta emblemática del distrito, apreciada por su dulzura y frescura.',
            imagen: 'assets/NARANJA-IMG.jpg',
            personaje: 'assets/INICIO/PRODUCTOS/personaje-naranja.png',
            animacion: 'slide-in-from-l-20'
        },

        {
            nombre: 'Granadilla',
            descripcion: 'Conocida por su sabor delicado y propiedades nutritivas.',
            imagen: 'assets/GRANADILLAS-IMG.avif',
            personaje: 'assets/INICIO/PRODUCTOS/personaje-cafe.png',
            animacion: 'slide-in-from-r-20'
        },

        {
            nombre: 'Lima',
            descripcion: 'Producto tradicional utilizado en la gastronomía regional.',
            imagen: 'assets/LIMAS-IMG.jpg',
            personaje: 'assets/INICIO/PRODUCTOS/personaje-naranja.png',
            animacion: 'slide-in-from-r-20'
        }

    ];


}