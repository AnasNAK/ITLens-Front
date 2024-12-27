import { Component } from '@angular/core';
import { PanelItemNavigateComponent } from "../../../../../shared/Panel/panel-item-navigate/panel-item-navigate.component";

@Component({
  selector: 'app-panel-item-holder',
  standalone: true,
  imports: [PanelItemNavigateComponent],
  templateUrl: './panel-item-holder.component.html',
  styleUrl: './panel-item-holder.component.css'
})
export class PanelItemHolderComponent {

}
