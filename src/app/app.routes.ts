import { Routes } from '@angular/router';
import { INICIO_ROUTES } from './feactures/inicio/inicio.routes';
import { LUGARES_TURISTICOS_ROUTES } from './feactures/lugares-turisticos/lugaresTuristicos.routes';

export const routes: Routes = [
    ...INICIO_ROUTES,
    ...LUGARES_TURISTICOS_ROUTES,
    {
        path:'**',
        redirectTo: 'Inicio'
    }
];
