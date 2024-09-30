import { NgModule } from '@angular/core';
import { PipeRoutingModule } from './pipe-routing.module';
import { DemoFilterPipeComponent } from './demo-filter-pipe/demo-filter-pipe.component';
import { DemoSafeurlPipeComponent } from './demo-safeurl-pipe/demo-safeurl-pipe.component';
import { DemoSearchPipeComponent } from './demo-search-pipe/demo-search-pipe.component';
import { MdsHightlightPrismModule, MdsPipesModule } from 'medes-ui';
import { CommonModule } from '@angular/common';
import { DemoFilterRangePipeComponent } from './demo-filter-range-pipe/demo-filter-range-pipe.component';

@NgModule({
  declarations: [DemoFilterPipeComponent, DemoSafeurlPipeComponent, DemoSearchPipeComponent, DemoFilterRangePipeComponent],
  imports: [CommonModule, MdsHightlightPrismModule, PipeRoutingModule, MdsPipesModule]
})

export class PipeModule { }
