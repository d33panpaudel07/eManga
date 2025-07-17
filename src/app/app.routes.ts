// app.routes.ts
import {Routes} from '@angular/router';
import {HomeComponent} from './features/home/home.component';

export const appRoutes: Routes = [
  // {path: '', component: HomeComponent},// eager route
  // {path: '', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)}, //lazy route
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: '',
    loadComponent: () => import('./layouts/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
    children: [
      {path: 'home', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)},
      {path: 'browse', loadComponent: () => import('./features/browse/browse.component').then(m => m.BrowseComponent)},
    ]
  },
  {
    path: 'register',
    loadComponent: () => import('./layouts/auth-layout/auth-layout.component').then(m => m.AuthLayoutComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('./layouts/auth-layout/auth-layout.component').then(m => m.AuthLayoutComponent)
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];
