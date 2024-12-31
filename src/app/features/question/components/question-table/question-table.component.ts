import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from '../../../../core/models/question.model';

@Component({
  selector: 'app-question-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question-table.component.html',
  styleUrls: ['./question-table.component.scss']
})
export class QuestionTableComponent {
  @Input() questions: Question[] = [];
}

