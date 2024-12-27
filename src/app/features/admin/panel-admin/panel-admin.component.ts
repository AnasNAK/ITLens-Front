import { Component } from '@angular/core';
import { PanelItemLogoComponent } from "./panel-item-logo/panel-item-logo.component";
import { PanelItemHolderComponent } from "./panel-item-holder/panel-item-holder.component";
import { PanelItemNavigateComponent } from "../../../../shared/Panel/panel-item-navigate/panel-item-navigate.component";
import { PanelItemSearchComponent } from "./panel-item-search/panel-item-search.component";

@Component({
  selector: 'app-panel-admin',
  standalone: true,
  imports: [PanelItemLogoComponent, PanelItemHolderComponent, PanelItemSearchComponent],
  templateUrl: './panel-admin.component.html',
  styleUrl: './panel-admin.component.css'
})
export class PanelAdminComponent {

}
