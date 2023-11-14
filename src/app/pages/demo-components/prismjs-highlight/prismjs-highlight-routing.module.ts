import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrismjsHighlightComponent } from './prismjs-highlight.component';

const routes: Routes = [{ path: '', component: PrismjsHighlightComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrismjsHighlightRoutingModule { }
