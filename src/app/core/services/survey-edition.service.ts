import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SurveyEdition, CreateSurveyEditionDto } from '../models/survey-edition.model';

@Injectable({
  providedIn: 'root'
})
export class SurveyEditionService {
  private apiUrl = 'http://localhost:8080/api/surveyEditions';

  constructor(private http: HttpClient) { }

  getSurveyEditions(): Observable<SurveyEdition[]> {
    return this.http.get<SurveyEdition[]>(this.apiUrl);
  }

  getSurveyEdition(id: number): Observable<SurveyEdition> {
    return this.http.get<SurveyEdition>(`${this.apiUrl}/${id}`);
  }

  createSurveyEdition(editionData: CreateSurveyEditionDto): Observable<SurveyEdition> {
    return this.http.post<SurveyEdition>(this.apiUrl, editionData);
  }

  updateSurveyEdition(edition: SurveyEdition): Observable<SurveyEdition> {
    return this.http.put<SurveyEdition>(`${this.apiUrl}/${edition.id}`, edition);
  }

  deleteSurveyEdition(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

