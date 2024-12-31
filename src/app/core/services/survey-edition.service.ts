import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SurveyEdition, CreateSurveyEditionDto, SurveyEditionWithSubjects } from '../models/survey-edition.model';

@Injectable({
  providedIn: 'root'
})
export class SurveyEditionService {
  private apiUrl = 'http://localhost:8080/api/surveyEditions';

  constructor(private http: HttpClient) { }

  getSurveyEditions(): Observable<SurveyEdition[]> {
    return this.http.get<SurveyEdition[]>(this.apiUrl).pipe(
      tap(editions => console.log('Fetched survey editions:', editions))
    );
  }

  getSurveyEditionWithSubjects(id: number): Observable<SurveyEditionWithSubjects> {
    console.log(`Fetching survey edition with subjects for id: ${id}`);
    return this.http.get<SurveyEditionWithSubjects>(`${this.apiUrl}/${id}`).pipe(
      tap(
        data => console.log('API response for survey edition with subjects:', data),
        error => console.error('API error when fetching survey edition with subjects:', error)
      )
    );
  }

  getSurveyEdition(id: number): Observable<SurveyEdition> {
    return this.http.get<SurveyEdition>(`${this.apiUrl}/${id}`).pipe(
      tap(edition => console.log('Fetched survey edition:', edition))
    );
  }

  createSurveyEdition(editionData: CreateSurveyEditionDto): Observable<SurveyEdition> {
    return this.http.post<SurveyEdition>(this.apiUrl, editionData).pipe(
      tap(newEdition => console.log('Created new survey edition:', newEdition))
    );
  }
}

 