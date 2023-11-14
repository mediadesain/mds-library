import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MdsHightlightPrismModule } from 'medes-ui';

@Component({
  selector: 'mds-prismjs-highlight',
  templateUrl: './prismjs-highlight.component.html',
  styleUrls: ['./prismjs-highlight.component.scss'],
  standalone: true,
  imports: [CommonModule, MdsHightlightPrismModule]
})
export class DemoPrismjsHighlightComponent {
  importmodule = `
import { MdsHightlightPrismModule } from 'medes-ui';

@NgModule({
  declarations: [ ... ],
  imports: [
    MdsHightlightPrismModule
  ]
})`;
importcompnent = `
<mds-hightlight-prism [code]="importmodule" language="typescript" [heightHighlight]="500"></mds-hightlight-prism>`;

  // constructor() { }


}
