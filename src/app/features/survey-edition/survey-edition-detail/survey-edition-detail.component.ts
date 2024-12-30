import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { SurveyEditionService } from '../../../core/services/survey-edition.service';
import { SubjectService } from '../../../core/services/subject.service';
import { SurveyEdition } from '../../../core/models/survey-edition.model';
import { Subject } from '../../../core/models/subject.model';
import { SubjectComponent } from '../../subject/subject.component';

@Component({
  selector: 'app-survey-edition-detail',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, SubjectComponent],
  templateUrl: './survey-edition-detail.component.html',
  styleUrls: ['./survey-edition-detail.component.scss']
})
export class SurveyEditionDetailComponent implements OnInit {
  surveyEdition: SurveyEdition | null = null;
  subjects: Subject[] = [];

  constructor(
    private route: ActivatedRoute,
    private surveyEditionService: SurveyEditionService,
    private subjectService: SubjectService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadSurveyEdition(+id);
    }
  }

  loadSurveyEdition(id: number): void {
    this.surveyEditionService.getSurveyEdition(id).subscribe({
      next: (edition) => {
        this.surveyEdition = edition;
        this.loadSubjects(edition);
      },
      error: (error) => {
        console.error('Error fetching survey edition:', error);
      }
    });
  }

  loadSubjects(edition: SurveyEdition): void {
    this.subjectService.getSubjectsByEdition(edition.id).subscribe({
      next: (subjects) => {
        this.subjects = this.organizeSubjects(subjects, edition);
      },
      error: (error) => {
        console.error('Error fetching subjects:', error);
      }
    });
  }

  organizeSubjects(subjects: Subject[], edition: SurveyEdition): Subject[] {
    const topLevelSubjects: Subject[] = [];
    const subjectMap = new Map<number, Subject>();

    subjects.forEach(subject => {
      subjectMap.set(subject.id, { ...subject, surveyEdition: edition, subSubjects: [] });
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

    return topLevelSubjects;
  }
}

