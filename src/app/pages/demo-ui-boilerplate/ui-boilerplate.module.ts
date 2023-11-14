import { NgModule } from '@angular/core';
import { MdsDocBoilerplateRoutingModule } from './ui-boilerplate-routing.module';
import { MdsDocBoilerplateComponent } from './ui-boilerplate.component';
import { GridSystemComponent } from './grid-system/grid-system.component';
import { ImageLoaderComponent } from './image-loader/image-loader.component';
import { LayoutUtilsComponent } from './layout-utils/layout-utils.component';
import { MdsHightlightPrismModule } from 'medes-ui';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GridSystemComponent,
    ImageLoaderComponent,
    LayoutUtilsComponent,
    MdsDocBoilerplateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MdsHightlightPrismModule,
    MdsDocBoilerplateRoutingModule
  ]
})
export class MdsDocBoilerplateModule { }
