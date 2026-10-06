import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { InicioQueConoceras } from '../../../../shared/data/Inicio/Inicio-QueConoceras.interface';
import { experienciasInicio } from '../../../../shared/data/Inicio/Inicio-QueConoceras.data';

@Component({
    selector: 'app-que-conoceras-inicio-components',
    imports: [AnimateOnScrollModule, RouterLink],
    templateUrl: './que-conoceras-inicio-components.html',
    styleUrl: './que-conoceras-inicio-components.css',
})
export class QueConocerasInicioComponents {

    experiencias: InicioQueConoceras[] = experienciasInicio;

    iconos: Record<string, string[]> = {
        naturaleza: [
            'M3 20h18',
            'm5 20 5-9 4 5 2-3 3 7',
            'M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4',
        ],
        cataratas: [
            'M9 3v7', 'M12 3v9', 'M15 3v7',
            'M4 15c2-1.2 4-1.2 6 0s4 1.2 6 0 4-1.2 6 0',
            'M4 19c2-1.2 4-1.2 6 0s4 1.2 6 0 4-1.2 6 0',
        ],
        termales: [
            'M8 3c-1.5 1.5-1.5 3 0 4.5s1.5 3 0 4.5',
            'M12 2c-1.5 1.5-1.5 3 0 4.5s1.5 3 0 4.5',
            'M16 3c-1.5 1.5-1.5 3 0 4.5s1.5 3 0 4.5',
            'M3 14c2-1.2 4-1.2 6 0s4 1.2 6 0 4-1.2 6 0',
            'M4 17c1.5 2.5 4.2 4 8 4s6.5-1.5 8-4',
        ],
        gastronomia: [
            'M3 2v7a4 4 0 0 0 4 4h1', 'M7 2v11', 'M11 2v7a4 4 0 0 1-4 4',
            'M7 13v9', 'M17 2v20', 'M17 2c2 0 4 2 4 5v3h-4',
        ],
    };
}