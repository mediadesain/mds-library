import { Component, OnInit } from '@angular/core';
import { MdsModalService } from 'medes-ui';
/*-- Medes Team Only --*/
// import { MdsHightlightPrismModule, MdsModalModule, MdsModalService } from 'projects/medes-ui/src/public-api';

@Component({
  selector: 'mds-demo-modal',
  templateUrl: './demo-modal.component.html',
  styleUrls: ['./demo-modal.component.scss']
})
export class DemoModalComponent implements OnInit {
  bodyText: string;
  constructor(private mdsModalService: MdsModalService) {}

  ngOnInit(): void {
    this.bodyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus condimentum nisl id vulputate. Praesent aliquet varius eros interdum suscipit. Donec eu purus sed nibh convallis bibendum quis vitae turpis. Duis vestibulum diam lorem, vitae dapibus nibh facilisis a. Fusce in malesuada odio.';
  }

  openModal(id: string): void {
    this.mdsModalService.trigger(id);
  }

  closeModal(id: string): void {
    this.mdsModalService.trigger(id);
  }

}
