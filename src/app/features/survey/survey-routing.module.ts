import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyListComponent } from '../survey/survey-list/survey-list.component';
import { SurveyDetailComponent } from '../survey/survey-detail/survey-detail.component';
import { SurveyFormComponent } from '../survey/survey-form/survey-form.component';
import { SurveyEditionDetailComponent } from '../survey-edition/survey-edition-detail/survey-edition-detail.component';

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
  },
  { 
    path: 'survey-editions/:editionId', 
    component: SurveyEditionDetailComponent,
    data: { breadcrumb: 'Survey Edition Details' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyRoutingModule { }

