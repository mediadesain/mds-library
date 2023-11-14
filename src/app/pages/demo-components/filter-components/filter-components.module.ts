import { NgModule } from '@angular/core';
import { FilterComponentsRoutingModule } from './filter-components-routing.module';
import { FilterComponentsComponent } from './filter-components.component';
import { CheckboxesComponent } from './checkboxes/checkboxes.component';
import { SwatchComponent } from './swatch/swatch.component';
import { ResetAllComponent } from './reset-all/reset-all.component';
import { AlertSoonComponent } from 'src/app/shared/components/alert-soon/alert-soon.component';
import { DemoComponent } from './demo/demo.component';

import { MdsHightlightPrismModule, MdsFilterModule, MdsPipesModule } from 'medes-ui';
// import { MdsHightlightPrismModule, MdsFilterModule, MdsPipesModule } from 'projects/medes-ui/src/public-api';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    FilterComponentsComponent,
    CheckboxesComponent,
    SwatchComponent,
    ResetAllComponent,
    AlertSoonComponent,
    DemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FilterComponentsRoutingModule,
    MdsHightlightPrismModule,
    MdsFilterModule,
    MdsPipesModule
  ]

})
export class FilterComponentsModule { }
