import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { SurveyDetailComponent } from './survey-detail/survey-detail.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';

const routes: Routes = [
  { 
    path: '', 
    component: SurveyListComponent 
  },
  { 
    path: 'new', 
    component: SurveyFormComponent,
    data: { breadcrumb: 'New Survey' }
  },
  { 
    path: ':id', 
    component: SurveyDetailComponent,
    data: { breadcrumb: 'Survey Details' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyRoutingModule { }

