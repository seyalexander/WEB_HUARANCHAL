import { Routes } from '@angular/router';

export const COSTUMBRES_TRADICIONES_ROUTES: Routes = [
    {
        path:'Costumbres-Tradiciones',
        loadComponent: () => import('../costumbresTradiciones/page/costumbres-tradiciones-page/costumbres-tradiciones-page').then(m => m.CostumbresTradicionesPage)
    }
];
