import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgramsComponent } from './programs/programs.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: 'dashboard', loadChildren: './home/home.module#HomeModule' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'programs', component: ProgramsComponent },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' },
];
