import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdsHightlightPrismModule } from 'medes-ui';

@Component({
  selector: 'mds-image-loader',
  templateUrl: './image-loader.component.html',
  styleUrls: ['./image-loader.component.scss'],
  standalone: true,
  imports: [MdsHightlightPrismModule, FormsModule]
})
export class ImageLoaderComponent {

  // constructor() { }


}
