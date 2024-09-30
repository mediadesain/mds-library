import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdsFilterRangeSliderComponent, MdsHightlightPrismModule } from 'medes-ui';
import { SelectedFilterSliderInterface } from 'medes-ui/lib/mds-filter/mds-filter.interface';

@Component({
  selector: 'mds-demo-filter-range-slider',
  templateUrl: './demo-filter-range-slider.component.html',
  styleUrls: ['./demo-filter-range-slider.component.scss']
})
export class DemoFilterFilterRangeSliderComponent {
  filterRangeSelected: SelectedFilterSliderInterface = {
    min: 1250,
    max: 19500,
    start: 6000,
    end: 17000
  };

  samplecomponent = `
import { MdsFilterRangeSliderComponent } from 'medes-ui';

@Component({
  selector: 'mds-my-component',
  templateUrl: './mds-my-component.component.html',
  styleUrls: ['./mds-my-component.component.scss'],
  standalone: true,
  imports: [MdsFilterRangeSliderComponent] // import here if standalone component is true
})

export class MyComponent {
...
  filterRangeSelected: SelectedFilterSliderInterface = {
    min: ${this.filterRangeSelected.min},
    max: ${this.filterRangeSelected.max},
    start: ${this.filterRangeSelected.start},
    end: ${this.filterRangeSelected.end}
  };
...
}`;
componenthtml = `
<!-- Filter range slider -->
<mds-filter-range-slider
  [label]="'Filter by price'"
  [min]="filterRangeSelected.min"
  [max]="filterRangeSelected.max"
  [(start)]="filterRangeSelected.start"
  [(end)]="filterRangeSelected.end"
  [reset]="'<b>✕</b>'">
</mds-filter-range-slider>
<small><i>Output: {{filterRangeSelected.start}} - {{filterRangeSelected.end}}</i></small>

<hr/>

<!-- Filter range slider disabled -->
<mds-filter-range-slider
  [label]="'Filter by something <i>(disabled)</i>'"
  [min]="20"
  [max]="100"
  [start]="25"
  [end]="40"
  [disabled]="true">
</mds-filter-range-slider>`;

  constructor() {}

}
