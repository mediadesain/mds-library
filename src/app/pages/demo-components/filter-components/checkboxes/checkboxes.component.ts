import { Component, OnInit } from '@angular/core';
import { SelectedFilterInterface } from 'medes-ui/lib/mds-filter/mds-filter.interface';
import { ProductDataModel, SampleProductsData } from 'src/app/shared/constant/products';

@Component({
  selector: 'mds-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.scss']
})

export class CheckboxesComponent implements OnInit {
  sampledata: ProductDataModel[];
  selected: SelectedFilterInterface = {};
  peropKey: string = 'category';

samplecomponent = `
import { MdsFilterCheckboxComponent } from 'medes-ui';

@Component({
  selector: 'mds-my-component',
  templateUrl: './mds-my-component.component.html',
  styleUrls: ['./mds-my-component.component.scss'],
  standalone: true,
  imports: [MdsFilterCheckboxComponent] // import here if standalone component is true
})

export class MyComponent {
...
  // Sample datas, key to filter and filter selected
  sampledata: ProductDataModel[] = [
    { "brand": "puma", "category": "tshirt", "color": "brown", "gender": "unisex", "id": "62122871cb242f1f01d916f9", "picture": "https://picsum.photos/400?image=172", "price": 1851.141, "name": "Herminia Ray" },
    { "brand": "puma", "category": "accesoriss", "color": "purple,brown", "gender": "women", "id": "621228716682ceb404a69e75", "picture": "https://picsum.photos/400?image=702", "price": 1513.896, "name": "Brittany Neal" },
    { "brand": "puma", "category": "tshirt", "color": "blue sky", "gender": "men", "id": "62122871b37e4c94421a90b9", "picture": "https://picsum.photos/400?image=665", "price": 1879.761, "name": "Mamie Ballard" },
    ...
  ]; // Full data https://github.com/mediadesain/medes-ui-boilerplate/blob/main/src/app/shared/constant/products.ts
  selected: SelectedFilterInterface = {};
  peropKey: string = 'category';
...
}`;
componentdemo = `
<!-- Filter Checkboxes Component -->
<mds-filter-checkbox
  [titlegroup]="'Filter by Category'"
  [filterData]="sampledata"
  [filterBy]="peropKey"
  [filterSelected]="selected"
  [reset]="'✕'"
  [hideCounter]="false"
></mds-filter-checkbox>`;

  ngOnInit(): void {
    this.sampledata = SampleProductsData.data;
  }

}
