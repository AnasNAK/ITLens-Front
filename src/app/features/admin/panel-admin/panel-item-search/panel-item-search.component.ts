import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapSearch } from '@ng-icons/bootstrap-icons';


@Component({
  selector: 'app-panel-item-search',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './panel-item-search.component.html',
  styleUrl: './panel-item-search.component.css',
  viewProviders: [provideIcons({bootstrapSearch})]
})
export class PanelItemSearchComponent {

}
