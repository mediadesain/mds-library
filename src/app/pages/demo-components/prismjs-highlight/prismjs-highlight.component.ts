import { Component } from '@angular/core';

@Component({
  selector: 'mds-prismjs-highlight',
  templateUrl: './prismjs-highlight.component.html',
  styleUrls: ['./prismjs-highlight.component.scss']
})
export class PrismjsHighlightComponent {
  importmodule = `import { MdsHightlightPrismModule } from 'medes-ui';
@NgModule({
  declarations: [ ... ],
  imports: [
    MdsHightlightPrismModule
  ]
})`;
importcompnent = `<mds-hightlight-prism [code]="importmodule" language="typescript"></mds-hightlight-prism>`;

  // constructor() { }


}
