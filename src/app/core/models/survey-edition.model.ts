import { Survey } from './survey.model';
import { Subject } from './subject.model';

export interface SurveyEdition {
  id: number;
  survey: Survey;
  creationDate: string;
  startDate: string;
  endDate: string;
  year: number;
  subjects?: Subject[];
}

export interface CreateSurveyEditionDto {
  surveyId: number;
  creationDate: string;
  startDate: string;
  endDate: string;
  year: number;
}

export interface SurveyEditionWithSubjects {
  surveyEdition: SurveyEdition;
  subjects: Subject[];
}

