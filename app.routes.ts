import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => LoginComponent
  },
  {
    path: 'login',
    redirectTo: ''
  },
  {
    path: 'dashboard',
    loadComponent: () => DashboardComponent
  },
  {
    path: '**',
    loadComponent: () => PageNotFoundComponent
  }
];
