import { Routes } from '@angular/router';

export const GASTRONOMIA_ROUTES: Routes = [
    {
        path:'Gastronomia',
        loadComponent: () => import('../gastronomia/page/gastronomia-page/gastronomia-page').then(m => m.GastronomiaPage)
    }
];
