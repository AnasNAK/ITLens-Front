import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { Subject } from '../../core/models/subject.model';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent {
  @Input() subjects: Subject[] = [];
  @Output() subjectSelect = new EventEmitter<Subject>();
  expandedSubjects: Set<number> = new Set();

  toggleSubject(subject: Subject): void {
    console.log('Toggling subject:', subject);
    if (this.expandedSubjects.has(subject.id)) {
      this.expandedSubjects.delete(subject.id);
    } else {
      this.expandedSubjects.add(subject.id);
    }
    this.subjectSelect.emit(subject);
  }

  isExpanded(subject: Subject): boolean {
    return this.expandedSubjects.has(subject.id);
  }

  hasSubSubjects(subject: Subject): boolean {
    return subject.subSubjects !== undefined && subject.subSubjects.length > 0;
  }
}

