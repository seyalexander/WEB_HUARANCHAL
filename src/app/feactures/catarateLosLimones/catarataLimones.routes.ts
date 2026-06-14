import { Routes } from '@angular/router';

export const CATARATA_LIMONES_ROUTES: Routes = [
    {
        path:'CatarataPakcha',
        loadComponent: () => import('../catarateLosLimones/page/catarata-limones-page/catarata-limones-page').then(m => m.CatarataLimonesPage)
    }
];
