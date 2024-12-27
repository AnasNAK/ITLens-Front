import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';

import { radixDashboard } from '@ng-icons/radix-icons';

import { matDashboard , matFolderCopy } from '@ng-icons/material-icons/baseline';


@Component({
  selector: 'app-panel-item-navigate',
  standalone: true,
  imports: [CommonModule , RouterModule , NgIcon],
  templateUrl: './panel-item-navigate.component.html',
  styleUrl: './panel-item-navigate.component.css',
  viewProviders:[provideIcons({radixDashboard  , matDashboard , matFolderCopy})] 
})
export class PanelItemNavigateComponent {

  @Input() text : string = '';
  @Input() classs: string = '';
  @Input() route: string = '';
  @Input() icon : string = '';

  constructor(private router:Router , private activeRouter: ActivatedRoute){}

  setActive() {
    this.router.navigate([this.route]);
  }
}
