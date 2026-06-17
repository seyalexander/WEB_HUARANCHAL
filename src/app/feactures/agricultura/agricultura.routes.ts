import { Routes } from '@angular/router';

export const AGRICULTURA_ROUTES: Routes = [
    {
        path:'Agricultura',
        loadComponent: () => import('../agricultura/page/agricultura-page/agricultura-page').then(m => m.AgriculturaPage)
    }
];
