import { Owner } from "./owner.model";
import { SurveyEdition } from "./survey-edition.model";

export interface Survey {
    id: number;
    title: string;
    description: string;
    owner: Owner;
    surveyEditions : SurveyEdition[];

}

export interface CreateSurveyDto {
    title: string;
    description: string;
    ownerId: number;
}

export function createSurvey(dto: CreateSurveyDto): Omit<Survey, 'id' | 'owner' | 'surveyEditions'> {
    return {
        title: dto.title,
        description: dto.description,
    };
}