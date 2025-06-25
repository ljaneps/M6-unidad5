import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home').then(m => m.Home),
  },
  {
    path: 'dialogo',
    loadComponent: () => import('./components/dialogo/dialogo').then(m => m.Dialogo),
  },
  {
    path: 'formulario',
    loadComponent: () => import('./components/formulario/formulario').then(m => m.Formulario),
  },
  {
    path: 'grafo',
    loadComponent: () => import('./components/grafos/grafos').then(m => m.Grafos),
  },

];
