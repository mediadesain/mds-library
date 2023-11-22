import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MdsFilterResetComponent, MdsHightlightPrismModule } from 'medes-ui';

@Component({
  selector: 'mds-reset-all',
  templateUrl: './reset-all.component.html',
  styleUrls: ['./reset-all.component.scss'],
  standalone: true,
  imports: [CommonModule, MdsHightlightPrismModule, MdsFilterResetComponent]
})
export class ResetAllComponent {
  selected = { category: ['shoes'] };

componentdemo = `
<!-- Reset Filter Component -->
<mds-filter-reset [class]="'btn btn-primary'"
  [content]="'Reset All'"
  [(filterSelected)]="selected"
  [(filterRangeSelected)]="rangeSelected"
></mds-filter-reset>`;

}
