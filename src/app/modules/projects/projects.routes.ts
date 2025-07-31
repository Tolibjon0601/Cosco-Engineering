import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/project/project.component').then(
        (m) => m.ProjectComponent
      ),
  },
];

export default routes;
