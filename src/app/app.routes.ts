// app.routes.ts
import {Routes} from '@angular/router';
import {HomeComponent} from './features/home/home.component';

export const appRoutes: Routes = [
  {path: '', component: HomeComponent},// eager route
  // {path: '', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)}, //lazy route

  {
    path: 'main',
    loadComponent: () => import('./layouts/main-layout/main-layout.component').then(m => m.MainLayoutComponent)
  }

  // { path: 'products', component: ProductsComponent },
  // {
  //   path: 'seller',
  //   component: SellerLayoutComponent,
  //   children: [
  //     { path: '', redirectTo: 'profile', pathMatch: 'full' },
  //     { path: 'profile', component: SellerProfileComponent },
  //     { path: 'orders', component: SellerOrdersComponent }
  //   ]
  // },
];
