import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-survey-edition-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LucideAngularModule],
  templateUrl: './survey-edition-form.component.html',
  styleUrls: ['./survey-edition-form.component.scss']
})
export class SurveyEditionFormComponent implements OnInit {
  @Input() surveyId!: number;
  @Output() formSubmit = new EventEmitter<any>();
  @Output() formCancel = new EventEmitter<void>();

  editionForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.editionForm = this.fb.group({
      creationDate: [new Date().toISOString().split('T')[0], Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      year: [new Date().getFullYear(), [Validators.required, Validators.min(2000), Validators.max(2100)]],
      surveyId: [this.surveyId, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.editionForm.valid) {
      const formValue = this.editionForm.value;
      formValue.creationDate = new Date(formValue.creationDate).toISOString();
      formValue.startDate = new Date(formValue.startDate).toISOString();
      formValue.endDate = new Date(formValue.endDate).toISOString();
      this.formSubmit.emit(formValue);
    }
  }

  onCancel(): void {
    this.formCancel.emit();
  }
}

