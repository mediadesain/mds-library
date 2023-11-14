import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdsFilterCheckboxComponent, MdsFilterPipe, MdsFilterResetComponent, MdsFilterSwatchComponent, MdsHightlightPrismModule, MdsSearchPipe } from 'medes-ui';
import { SampleProductsData } from 'src/app/shared/constant/products';

@Component({
  selector: 'mds-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MdsHightlightPrismModule, MdsFilterCheckboxComponent, MdsFilterSwatchComponent, MdsFilterResetComponent, MdsFilterPipe, MdsSearchPipe]
})
export class DemoComponent implements OnInit {
  sampledata = [];
  selected = {};
  colormap = {
      'blue-sky': '#66ccdd',
      maroon: '#bb6a66',
      brown: '#6b6a6b',
      black: '#000000',
      purple: '#6a66bb',
      gold: '#b6ab66'
  };

  ngOnInit(): void {
    this.sampledata = SampleProductsData.data;
  }

}
