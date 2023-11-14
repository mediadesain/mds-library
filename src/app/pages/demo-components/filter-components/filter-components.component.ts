import { Component, OnInit } from '@angular/core';
import { SampleProductsData } from 'src/app/shared/constant/products';

@Component({
  selector: 'mds-filter-components',
  templateUrl: './filter-components.component.html',
  styleUrls: ['./filter-components.component.scss']
})
export class FilterComponentsComponent implements OnInit {
  sampledata = [];
  selected = {};
  key = 'color';
  colormap = {
      'blue-sky': '#66ccdd',
      maroon: '#bb6a66',
      brown: '#6b6a6b',
      black: '#000000',
      purple: '#6a66bb',
      gold: '#b6ab66'
  };

checkboxComponent = `
<!-- Filter Checkboxes Component - Multiple Group -->
<mds-filter-checkbox
  [titlegroup]="'Filter by'"
  [filterData]="sampledata"
  [filterBy]="['gender','category']"
  [filterSelected]="selected"
  [reset]="'✕'"
  [hideCounter]="false"
></mds-filter-checkbox>`;

swatchComponent = `
<!-- Filter Swatch Component -->
<mds-filter-swatch
  [titlegroup]="'Filter by Color'"
  [filterData]="sampledata"
  [filterBy]="key"
  [filterSelected]="selected"
  [swatchMapping]="colormap"
  [swatchSize]="30"
  [swatchRadius]="25"
></mds-filter-swatch>`;

resetComponent = `
<!-- Reset Filter Component -->
<mds-filter-reset [content]="'Reset All'" [(filterSelected)]="selected"></mds-filter-reset>`;


importmodule = `
import { MdsFilterModule } from 'medes-ui';

@NgModule({
  declarations: [ ... ],
  imports: [
    MdsFilterModule
  ]
})

export class MyModule { }`;

  ngOnInit(): void {
    this.sampledata = SampleProductsData.data;
  }

}
