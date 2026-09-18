import { Component } from '@angular/core';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { InicioQueConoceras } from '../../../../shared/data/Inicio/Inicio-QueConoceras.interface';
import { experienciasInicio } from '../../../../shared/data/Inicio/Inicio-QueConoceras.data';

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

    experiencias: InicioQueConoceras[] = experienciasInicio;

}