import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MdsHightlightPrismModule } from 'medes-ui';

@Component({
  selector: 'mds-object-utils',
  templateUrl: './object-utils.component.html',
  styleUrls: ['./object-utils.component.scss'],
  standalone: true,
  imports: [CommonModule, MdsHightlightPrismModule]
})
export class ObjectUtilsComponent {
import = `
import { MdsObjectUtils } from 'medes-ui';`;
demo = `
const object = {
  "firstname": "Jhon",
  "lastname": "",
  "gender": null,
  "city": undefined
};
MdsObjectUtils.removeKeysIfEmpty(object); // output {"firstname":"Jhon"}`;
  // constructor() { }


}
