import { Survey } from "./survey.model";

export interface SurveyEdition {
    id: number;
    survey: Survey;
    creationDate: Date;
    startDate: Date;
    endDate: Date;
    year: number; 
}

export interface CreateSurveyEditionDto {
    surveyId: number;
    creationDate: Date;
    startDate: Date;
    endDate: Date;
    year: number; 
}

// export function createSurveyEditionDto(dto: CreateSurveyEditionDto): Omit<SurveyEdition, 'id' | 'survey'> {
//     return {
//         creationDate: dto.creationDate,
//         startDate: dto.startDate,
//         endDate: dto.endDate,
//         year: dto.year
//     };
// }

