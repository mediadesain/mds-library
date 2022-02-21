import { Component, OnInit } from '@angular/core';
import { SampleProductsData } from 'src/app/shared/constant/proucts';

@Component({
  selector: 'medes-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.scss']
})
export class CheckboxesComponent implements OnInit {
  sampledata: any[] = [];
  selected: {[key: string]: string[]} = {};
  keys: string[] = ['gender','category']

samplecomponent = `export class MyComponent implements OnInit {
...
  // Sample datas, keys to filter and filter selected
  sampledata: any[] = [
    { "brand": "puma", "category": "tshirt", "color": "brown", "gender": "unisex", "id": "62122871cb242f1f01d916f9", "picture": "https://picsum.photos/400?image=172", "price": 1851.141, "name": "Herminia Ray" },
    { "brand": "puma", "category": "accesoriss", "color": "purple,brown", "gender": "women", "id": "621228716682ceb404a69e75", "picture": "https://picsum.photos/400?image=702", "price": 1513.896, "name": "Brittany Neal" },
    { "brand": "puma", "category": "tshirt", "color": "blue sky", "gender": "men", "id": "62122871b37e4c94421a90b9", "picture": "https://picsum.photos/400?image=665", "price": 1879.761, "name": "Mamie Ballard" },
    ...
  ]; // Full data https://github.com/mediadesain/medes-ui-boilerplate/blob/main/src/app/shared/constant/proucts.ts
  selected: {[key: string]: string[]} = ${JSON.stringify(this.selected)};
  keys: string[] = ['gender','category'];
...
}`;
componentdemo = `<!-- Filter Checkboxes Component -->
<mds-filter-checkbox
  [titlegroup]="'Filter by'"
  [filterData]="sampledata"
  [filterBy]="keys"
  [filterSelected]="selected"
  [reset]="'✕'"
  [hideCounter]="false"
></mds-filter-checkbox>`;

  constructor() { }

  ngOnInit(): void {
    this.sampledata = SampleProductsData.data;
  }

}
