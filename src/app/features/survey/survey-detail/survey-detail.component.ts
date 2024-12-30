import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { SurveyService } from '../../../core/services/survey.service';
import { SurveyEditionService } from '../../../core/services/survey-edition.service';
import { Survey } from '../../../core/models/survey.model';
import { SurveyEdition, CreateSurveyEditionDto } from '../../../core/models/survey-edition.model';
import { SurveyEditionFormComponent } from '../../survey-edition/survey-edition-form/survey-edition-form.component';

@Component({
  selector: 'app-survey-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule, SurveyEditionFormComponent],
  templateUrl: './survey-detail.component.html',
  styleUrls: ['./survey-detail.component.scss']
})
export class SurveyDetailComponent implements OnInit {
  survey: Survey | null = null;
  showEditionForm = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private surveyService: SurveyService,
    private surveyEditionService: SurveyEditionService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadSurvey(+id);
    }
  }

  loadSurvey(id: number): void {
    this.surveyService.getSurvey(id).subscribe({
      next: (survey) => {
        this.survey = survey;
        this.loadSurveyEditions();
      },
      error: (error) => {
        console.error('Error fetching survey:', error);
      }
    });
  }

  loadSurveyEditions(): void {
    if (this.survey) {
      this.surveyEditionService.getSurveyEditions().subscribe({
        next: (editions) => {
          this.survey!.surveyEditions = editions.filter(edition => edition.survey.id === this.survey!.id);
        },
        error: (error) => {
          console.error('Error fetching survey editions:', error);
        }
      });
    }
  }

  addSurveyEdition(): void {
    this.showEditionForm = true;
  }

  onEditionFormSubmit(editionData: Omit<CreateSurveyEditionDto, 'surveyId'>): void {
    if (this.survey) {
      const newEditionData: CreateSurveyEditionDto = {
        ...editionData,
        surveyId: this.survey.id
      };
      this.surveyEditionService.createSurveyEdition(newEditionData).subscribe({
        next: (newEdition) => {
          if (this.survey && this.survey.surveyEditions) {
            this.survey.surveyEditions.push(newEdition);
          }
          this.showEditionForm = false;
        },
        error: (error) => {
          console.error('Error adding survey edition:', error);
        }
      });
    }
  }

  onEditionFormCancel(): void {
    this.showEditionForm = false;
  }

  navigateToEditionDetail(editionId: number): void {
    this.router.navigate(['/survey-editions', editionId]);
  }
}

