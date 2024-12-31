import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { SurveyEditionService } from '../../../core/services/survey-edition.service';
import { SurveyEdition } from '../../../core/models/survey-edition.model';
import { Subject } from '../../../core/models/subject.model';
import { SubjectComponent } from '../../subject/subject.component';
import { QuestionTableComponent } from '../../question/components/question-table/question-table.component';

@Component({
  selector: 'app-survey-edition-detail',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, SubjectComponent, QuestionTableComponent],
  templateUrl: './survey-edition-detail.component.html',
  styleUrls: ['./survey-edition-detail.component.scss']
})
export class SurveyEditionDetailComponent implements OnInit {
  surveyEdition: SurveyEdition | null = null;
  subjects: Subject[] = [];
  selectedSubject: Subject | null = null;
  loading: boolean = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private surveyEditionService: SurveyEditionService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('editionId');
    console.log('Initializing SurveyEditionDetailComponent with id:', id);
    if (id) {
      this.loadSurveyEditionWithSubjects(+id);
    } else {
      console.error('No editionId provided in the route');
      this.error = 'Invalid survey edition ID';
      this.loading = false;
    }
  }

  loadSurveyEditionWithSubjects(id: number): void {
    this.loading = true;
    this.error = null;
    console.log('Fetching survey edition with subjects for id:', id);
    this.surveyEditionService.getSurveyEditionWithSubjects(id).subscribe({
      next: (data) => {
        console.log('Received data:', data);
        this.surveyEdition = data.surveyEdition;
        this.subjects = this.organizeSubjects(data.subjects);
        console.log('Organized subjects:', this.subjects);
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching survey edition with subjects:', error);
        this.error = 'Failed to load survey edition. Please try again.';
        this.loading = false;
      }
    });
  }

  organizeSubjects(subjects: Subject[]): Subject[] {
    console.log('Organizing subjects:', subjects);
    const topLevelSubjects: Subject[] = [];
    const subjectMap = new Map<number, Subject>();

    subjects.forEach(subject => {
      subjectMap.set(subject.id, { ...subject, subSubjects: [] });
    });

    subjects.forEach(subject => {
      if (subject.parent) {
        const parent = subjectMap.get(subject.parent.id);
        if (parent) {
          parent.subSubjects = parent.subSubjects || [];
          parent.subSubjects.push(subjectMap.get(subject.id)!);
        }
      } else {
        topLevelSubjects.push(subjectMap.get(subject.id)!);
      }
    });

    console.log('Organized top-level subjects:', topLevelSubjects);
    return topLevelSubjects;
  }

  onSubjectSelect(subject: Subject): void {
    console.log('Selected subject:', subject);
    this.selectedSubject = subject;
  }
}

