import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from './modal-component.component';
import { DemoModalComponent } from './demo-modal/demo-modal.component';
import { ModalComponentDetailComponent } from './modal-component-detail/modal-component-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'intro', component: ModalComponent },
  { path: 'detail', component: ModalComponentDetailComponent },
  { path: 'demo', component: DemoModalComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalComponentRoutingModule { }
