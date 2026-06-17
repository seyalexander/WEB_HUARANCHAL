import { Routes } from '@angular/router';

export const VESTIMENTAS_TIPICAS_ROUTES: Routes = [
    {
        path:'Vestimentas-Tipicas',
        loadComponent: () => import('../vestimentasTipicas/page/vestimentas-tipicas-page/vestimentas-tipicas-page').then(m => m.VestimentasTipicasPage)
    }
];
