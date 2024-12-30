import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { SurveyService } from '../../../core/services/survey.service';
import { Survey } from '../../../core/models/survey.model';

@Component({
  selector: 'app-survey-list',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.scss']
})
export class SurveyListComponent implements OnInit {
  surveys: Survey[] = [];

  constructor(private surveyService: SurveyService, private router: Router) {}

  ngOnInit(): void {
    this.loadSurveys();
  }

  loadSurveys(): void {
    this.surveyService.getSurveys().subscribe({
      next: (surveys) => {
        this.surveys = surveys;
      },
      error: (error) => {
        console.error('Error fetching surveys:', error);
      }
    });
  }

  selectSurvey(id: number): void {
    this.router.navigate(['/surveys', id]);
  }
}
