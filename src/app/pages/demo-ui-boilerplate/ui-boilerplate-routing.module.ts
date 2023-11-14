import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridSystemComponent } from './grid-system/grid-system.component';
import { ImageLoaderComponent } from './image-loader/image-loader.component';
import { MdsDocBoilerplateComponent } from './ui-boilerplate.component';
import { LayoutUtilsComponent } from './layout-utils/layout-utils.component';

const routes: Routes = [
  { path: '', redirectTo: 'basic-elements', pathMatch: 'full'  },
  { path: 'basic-elements', component: MdsDocBoilerplateComponent },
  { path: 'grid-system', component: GridSystemComponent },
  { path: 'layout-utils', component: LayoutUtilsComponent },
  { path: 'image-loader', component: ImageLoaderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MdsDocBoilerplateRoutingModule { }
