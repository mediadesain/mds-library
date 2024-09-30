import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroPipeComponent } from './pipe.component';
import { DemoFilterPipeComponent } from './demo-filter-pipe/demo-filter-pipe.component';
import { DemoSearchPipeComponent } from './demo-search-pipe/demo-search-pipe.component';
import { DemoSafeurlPipeComponent } from './demo-safeurl-pipe/demo-safeurl-pipe.component';
import { DemoFilterRangePipeComponent } from './demo-filter-range-pipe/demo-filter-range-pipe.component';

const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full'  },
  { path: 'intro', component: IntroPipeComponent },
  { path: 'filter', component: DemoFilterPipeComponent },
  { path: 'filter-range', component: DemoFilterRangePipeComponent },
  { path: 'search', component: DemoSearchPipeComponent },
  { path: 'safeurl', component: DemoSafeurlPipeComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipeRoutingModule { }
