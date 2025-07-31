import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component').then(
        (m) => m.HomeComponent
      ),
  },
];

export default routes;
