import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MdsHightlightPrismModule, MdsModalModule, MdsModalService } from 'medes-ui';
/*-- Medes Team Only --*/
// import { MdsHightlightPrismModule, MdsModalModule, MdsModalService } from 'projects/medes-ui/src/public-api';

@Component({
  selector: 'mds-modal-component-detail',
  templateUrl: './modal-component-detail.component.html',
  styleUrls: ['./modal-component-detail.component.scss'],
  standalone: true,
  imports: [CommonModule, MdsHightlightPrismModule, MdsModalModule]
})
export class ModalComponentDetailComponent implements OnInit {
html = `
<!-- Button Modal -->
<button (click)="openModal('my-modal-1')">Open Simple Modal</button>
<!-- Simple Sample Modal -->
<mds-modal id="my-modal-1" [modalWidth]="'medium'" [hideCloseButton]="false" [disableCloseBackdrop]="false">
    <div class="padding-1">
        <h3 class="padding-b-1">Simple Modal Sample</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique nec dui sit amet sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean massa augue, varius nec velit et, fermentum eleifend purus. Integer porta eros et risus mattis ultricies. Phasellus enim neque, finibus sed tempor at, pretium nec nulla. Pellentesque eget gravida lorem. Cras non volutpat urna. Phasellus nec quam mattis, euismod turpis ac, pulvinar enim. Proin lacinia felis nulla, ut convallis felis lacinia eget. Duis sed consectetur dui, eu dictum elit. Donec ut suscipit diam. Vestibulum nec ex a arcu rutrum vulputate ut eu lacus.</p>
        <p>Curabitur sem sapien, vestibulum non tincidunt semper, ullamcorper a ante. Morbi tempor sem nec facilisis efficitur. Nam vel quam malesuada, dignissim leo id, eleifend tortor. Etiam in rutrum elit.</p>
        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce et dolor quis sem porta feugiat ut sed neque. Sed sit amet eros sem. In malesuada eleifend erat, nec pulvinar elit dictum in. Donec eget erat eu erat ornare rutrum. Curabitur et varius neque. Nulla ultricies vel ligula pretium semper.</p>
    </div>
</mds-modal>`;
component = `
import { MdsModalService } from 'medes-ui'; // import modal service

export class MyComponent {

  constructor(public mdsModalService: MdsModalService) {}

  openModal(): void{
    this.mdsModalService.trigger(id);
  }:
}`;
constructor(public mdsModalService: MdsModalService) {}

  ngOnInit(): void {
    console.log('log')
  }

  openModal(id: string): void {
    this.mdsModalService.trigger(id);
  }

}
