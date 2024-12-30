import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SurveyService } from '../../../core/services/survey.service';
import { CreateSurveyDto, createSurvey } from '../../../core/models/survey.model';

@Component({
  selector: 'app-survey-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.scss']
})
export class SurveyFormComponent {
  surveyDto: CreateSurveyDto = {
    title: '',
    description: '',
    ownerId: 0
  };
  errorMessage: string = '';

  constructor(private surveyService: SurveyService, private router: Router) {}

  onSubmit() {
    this.errorMessage = '';
    const newSurvey = createSurvey(this.surveyDto);
    this.surveyService.createSurvey(newSurvey, this.surveyDto.ownerId).subscribe({
      next: () => {
        this.router.navigate(['/surveys']);
      },
      error: (error) => {
        console.error('Error creating survey:', error);
        this.errorMessage = error.message || 'Failed to create survey. Please try again.';
      }
    });
  }
}

