import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Survey } from '../models/survey.model';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}
  
  getSurveys(): Observable<Survey[]> {
    return this.http.get<Survey[]>(`${this.apiUrl}/surveys`)
      .pipe(catchError(this.handleError));
  }

  getSurvey(id: number): Observable<Survey> {
    return this.http.get<Survey>(`${this.apiUrl}/surveys/${id}`)
      .pipe(catchError(this.handleError));
  }

  createSurvey(survey: Omit<Survey, 'id' | 'owner' | 'surveyEditions'>, ownerId: number): Observable<Survey> {
    const payload = { ...survey, ownerId };
    return this.http.post<Survey>(`${this.apiUrl}/surveys`, payload)
      .pipe(catchError(this.handleError));
  }

  updateSurvey(id: number, survey: Partial<Survey>): Observable<Survey> {
    return this.http.put<Survey>(`${this.apiUrl}/surveys/${id}`, survey)
      .pipe(catchError(this.handleError));
  }

  deleteSurvey(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/surveys/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      if (error.error && error.error.message) {
        errorMessage += `\nServer response: ${error.error.message}`;
      }
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}

