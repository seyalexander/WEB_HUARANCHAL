import { Routes } from '@angular/router';

export const CHILLIN_ROUTES: Routes = [
    {
        path:'Chillin',
        loadComponent: () => import('./page/chillin-page/chillin-page').then(m => m.ChillinPage)
    }
];
