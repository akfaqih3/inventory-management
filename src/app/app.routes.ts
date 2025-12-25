import { Routes } from '@angular/router';
import { productRoutes } from './features/product/product-routes';

export const routes: Routes = [

  {
    path: 'dashboard',
    loadComponent: () => import('./shared/layouts/dashboard-layout/dashboard-layout').then(m => m.DashboardLayout),
    children: productRoutes
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
