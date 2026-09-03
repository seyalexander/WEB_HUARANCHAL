import { Component } from '@angular/core';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

interface Experiencia {
    nombre: string;
    descripcion: string;
    imagen: string;
    animacion: string;
}

@Component({
    selector: 'app-que-conoceras-inicio-components',
    imports: [AnimateOnScrollModule],
    templateUrl: './que-conoceras-inicio-components.html',
    styleUrl: './que-conoceras-inicio-components.css',
})
export class QueConocerasInicioComponents {

    experiencias: Experiencia[] = [
        {
            nombre: 'Naturaleza',
            descripcion: 'Paisajes verdes, montañas y caminos rodeados de vida.',
            imagen: 'assets/NATURALEZA-IMG.jpeg',
            animacion: 'slide-in-from-l-20'
        },
        {
            nombre: 'Cataratas',
            descripcion: 'Caídas de agua rodeadas por la belleza natural de Huaranchal.',
            imagen: 'assets/CATARATA-IMG.jpeg',
            animacion: 'slide-in-from-t-20'
        },
        {
            nombre: 'Baños Termales',
            descripcion: 'Espacios ideales para relajarse y disfrutar de aguas naturales.',
            imagen: 'assets/TERMALES-IMG.jpeg',
            animacion: 'slide-in-from-t-20'
        },
        {
            nombre: 'Gastronomía',
            descripcion: 'Café, naranjas, limas y granadillas cultivadas en la zona.',
            imagen: 'assets/PLATOS-IMG.jpg',
            animacion: 'slide-in-from-r-20'
        }
    ];

}