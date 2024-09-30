import { NgModule } from '@angular/core';
import { DemoUtilsRoutingModule } from './demo-utils-routing.module';
import { MdsHightlightPrismModule } from 'medes-ui';
import { ArrayUtilsComponent } from './aray-utils/aray-utils.component';
import { ColorUtilsComponent } from './color-utils/color-utils.component';
import { DateUtilsComponent } from './date-utils/date-utils.component';
import { NumberUtilsComponent } from './number-utils/number-utils.component';
import { ObjectUtilsComponent } from './object-utils/object-utils.component';
import { StringUtilsComponent } from './string-utils/string-utils.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ArrayUtilsComponent,
    ColorUtilsComponent,
    DateUtilsComponent,
    NumberUtilsComponent,
    ObjectUtilsComponent,
    StringUtilsComponent
  ],
  imports: [
    CommonModule,
    MdsHightlightPrismModule,
    DemoUtilsRoutingModule
  ]
})
export class DemoUtilsModule { }
