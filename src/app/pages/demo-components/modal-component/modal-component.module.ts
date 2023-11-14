import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponentRoutingModule } from './modal-component-routing.module';
import { FormsModule } from '@angular/forms';
import { MdsModalModule, MdsHightlightPrismModule, MdsModalService } from 'medes-ui';
import { DemoModalComponent } from './demo-modal/demo-modal.component';
import { ModalComponentDetailComponent } from './modal-component-detail/modal-component-detail.component';
import { ModalComponent } from './modal-component.component';
/*-- Medes Team Only --*/
// import { MdsModalModule, MdsHightlightPrismModule, MdsModalService } from 'projects/medes-ui/src/public-api';

@NgModule({
  declarations: [
    DemoModalComponent,
    ModalComponentDetailComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ModalComponentRoutingModule,
    MdsHightlightPrismModule,
    MdsModalModule
  ],
  providers: [MdsModalService]
})
export class ModalComponentModule { }
