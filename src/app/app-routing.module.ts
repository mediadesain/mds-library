import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoPrismjsHighlightComponent } from './pages/demo-components/prismjs-highlight/prismjs-highlight.component';

const routes: Routes = [
  {
    path: 'introduction',
    loadChildren: () => import('./pages/introduction/introduction.module').then(m => m.IntroductionModule),
  }, {
    path: 'ui-boilerplate',
    loadChildren: () => import('./pages/demo-ui-boilerplate/ui-boilerplate.module').then(m => m.MdsDocBoilerplateModule)
  }, {
    path: 'filter-components',
    loadChildren: () => import('./pages/demo-components/filter-components/filter-components.module').then(m => m.FilterComponentsModule)
  },
  {
    path: 'modal-component', loadChildren: () => import('./pages/demo-components/modal-component/modal-component.module').then(m => m.ModalComponentModule)
  },
  { path: 'pipe', loadChildren: () => import('./pages/demo-pipe/pipe.module').then(m => m.PipeModule) },
  {
    path: 'prismjs-highlight',
    component: DemoPrismjsHighlightComponent
  },
  {
    path: 'utils', loadChildren: () => import('./pages/demo-utils/demo-utils.module').then(m => m.DemoUtilsModule) },
  {
    path: '**', redirectTo: 'introduction/how-to-install'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
