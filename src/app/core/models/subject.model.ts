import { SurveyEdition } from "./survey-edition.model";

export interface Subject {
    id: number;
    title: string;
    parent?: Subject;
    surveyEdition: SurveyEdition;
    subSubjects?: Subject[];

}
