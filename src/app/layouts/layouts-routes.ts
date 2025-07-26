import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout.component').then((m) => m.LayoutComponent),
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () =>
          import(
            '../modules/home/components/home/home.component'
          ).then((m) => m.HomeComponent),
      },
      {
        path: 'project',
        loadChildren: () =>
          import('../modules/projects/projects.routes').then((m) => m.default),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('../modules/about/about.routes').then((m) => m.default),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('../modules/contact/contact.routes').then((m) => m.default),
      },

    ],
  },
];

export default routes;
