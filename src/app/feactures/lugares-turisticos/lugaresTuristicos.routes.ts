import { Routes } from '@angular/router';

export const LUGARES_TURISTICOS_ROUTES: Routes = [
    {
        path:'Lugares',
        loadComponent: () => import('../lugares-turisticos/page/lugares-turisticos-pages/lugares-turisticos-pages').then(m => m.LugaresTuristicosPages)
    }
];
