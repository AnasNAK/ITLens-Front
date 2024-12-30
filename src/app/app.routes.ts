import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './core/components/dashboard-layout/dashboard-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'surveys',
        data: { breadcrumb: 'Surveys' },
        loadChildren: () => import('./features/survey/survey.module').then(m => m.SurveyModule)
      },
      { path: '', redirectTo: 'surveys', pathMatch: 'full' }
    ]
  }
];


