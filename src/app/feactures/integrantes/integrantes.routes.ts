import { Routes } from '@angular/router';

export const INTEGRANTES_ROUTES: Routes = [
    {
        path:'Integrantes',
        loadComponent: () => import('../integrantes/page/integrantes/integrantes').then(m => m.Integrantes)
    }
];
