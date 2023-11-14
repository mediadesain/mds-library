import { Component } from '@angular/core';

@Component({
  selector: 'mds-reset-all',
  templateUrl: './reset-all.component.html',
  styleUrls: ['./reset-all.component.scss']
})
export class ResetAllComponent {
  selected = { category: ['shoes'] };

componentdemo = `
<!-- Reset Filter Component -->
<mds-filter-reset [class]="'btn btn-primary'" [content]="'Reset All'" [(filterSelected)]="selected"></mds-filter-reset>`;

}
