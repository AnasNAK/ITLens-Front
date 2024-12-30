import { Component, Input } from '@angular/core';
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
  expandedSubjects: Set<number> = new Set();

  toggleSubject(subjectId: number): void {
    if (this.expandedSubjects.has(subjectId)) {
      this.expandedSubjects.delete(subjectId);
    } else {
      this.expandedSubjects.add(subjectId);
    }
  }

  isExpanded(subjectId: number): boolean {
    return this.expandedSubjects.has(subjectId);
  }

  hasSubSubjects(subject: Subject): boolean {
    return subject.subSubjects !== undefined && subject.subSubjects.length > 0;
  }
}

