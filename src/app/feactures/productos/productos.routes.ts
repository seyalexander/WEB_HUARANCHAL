import { Routes } from '@angular/router';

export const PRODUCTOS_TURISTICOS_ROUTES: Routes = [
    {
        path:'Productos',
        loadComponent: () => import('../productos/page/frutas-paralax-component/frutas-paralax-component').then(m => m.FrutasParalaxComponent)
    },
];
