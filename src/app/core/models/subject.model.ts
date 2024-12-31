import { SurveyEdition } from './survey-edition.model';
import { Question } from './question.model';

export interface Subject {
  id: number;
  title: string;
  surveyEdition: SurveyEdition;
  parent: SubjectParent | null;
  questionList: Question[];
  subSubjects?: Subject[]; 
}

export interface SubjectParent {
  id: number;
  title: string;
}