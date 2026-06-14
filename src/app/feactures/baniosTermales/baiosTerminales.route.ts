import { Routes } from '@angular/router';

export const BANIOS_TERMALES_ROUTES: Routes = [
    {
        path:'BaniosTermales',
        loadComponent: () => import('../baniosTermales/pages/banios-termanles-page/banios-termanles-page').then(m => m.BaniosTermanlesPage)
    }
];
