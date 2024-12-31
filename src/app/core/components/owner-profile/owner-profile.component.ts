import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-owner-profile',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './owner-profile.component.html',
  styleUrls: ['./owner-profile.component.scss']
})
export class OwnerProfileComponent {
  @Input() owner: { name: string } = { name: 'default anas' };
}

