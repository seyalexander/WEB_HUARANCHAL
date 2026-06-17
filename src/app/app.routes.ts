import { Routes } from '@angular/router';
import { INICIO_ROUTES } from './feactures/inicio/inicio.routes';
import { LUGARES_TURISTICOS_ROUTES } from './feactures/lugares-turisticos/lugaresTuristicos.routes';
import { BANIOS_TERMALES_ROUTES } from './feactures/baniosTermales/baiosTerminales.route';
import { CATARATA_LIMONES_ROUTES } from './feactures/catarateLosLimones/catarataLimones.routes';
import { COSTUMBRES_TRADICIONES_ROUTES } from './feactures/costumbresTradiciones/costumbres.routes';
import { VESTIMENTAS_TIPICAS_ROUTES } from './feactures/vestimentasTipicas/vestimentasTipicas.routes';
import { AGRICULTURA_ROUTES } from './feactures/agricultura/agricultura.routes';
import { GASTRONOMIA_ROUTES } from './feactures/gastronomia/gastronomia.routes';
import { INTEGRANTES_ROUTES } from './feactures/integrantes/integrantes.routes';

export const routes: Routes = [
    ...INICIO_ROUTES,
    ...LUGARES_TURISTICOS_ROUTES,
    ...BANIOS_TERMALES_ROUTES,
    ...CATARATA_LIMONES_ROUTES,
    ...COSTUMBRES_TRADICIONES_ROUTES,
    ...VESTIMENTAS_TIPICAS_ROUTES,
    ...AGRICULTURA_ROUTES,
    ...GASTRONOMIA_ROUTES,
    ...INTEGRANTES_ROUTES,
    {
        path:'**',
        redirectTo: 'Inicio'
    }
];
