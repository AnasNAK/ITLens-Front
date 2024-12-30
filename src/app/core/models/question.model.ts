import { Subject } from "./subject.model";

export enum QuestionType {
    SINGLE_CHOICE = 'SINGLE_CHOICE',
    MULTIPLE_CHOICE = 'MULTIPLE_CHOICE'
}

export interface Question {
    id: number;
    text: string;
    subject: Subject;
    type: QuestionType;
    answerCount: number;
}
