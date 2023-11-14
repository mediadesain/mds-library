import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MdsFilterSwatchComponent, MdsHightlightPrismModule } from 'medes-ui';
import { SampleProductsData } from 'src/app/shared/constant/products';

@Component({
  selector: 'mds-swatch',
  templateUrl: './swatch.component.html',
  styleUrls: ['./swatch.component.scss'],
  standalone: true,
  imports: [CommonModule, MdsHightlightPrismModule, MdsFilterSwatchComponent]
})
export class SwatchComponent implements OnInit {
  sampledata: {
    brand: string,
    category: string | string[],
    color: string,
    gender: string,
    id: string,
    picture: string,
    price: number,
    name: string
  }[];
  key = 'color';
  selected: {[key: string]: string[]} = {};
  colormap: {[key: string]: string} = {
    'blue-sky': '#66ccdd',
    maroon: '#bb6a66',
    brown: '#6b6a6b',
    black: '#000000',
    purple: '#6a66bb',
    gold: '#b6ab66'
  };

samplecomponent = `
export class MyComponent implements OnInit {
...
  // Sample datas, keys to filter and filter selected
  sampledata: any[] = [
    { "brand": "puma", "category": "tshirt", "color": "brown", "gender": "unisex", "id": "62122871cb242f1f01d916f9", "picture": "https://picsum.photos/400?image=172", "price": 1851.141, "name": "Herminia Ray" },
    { "brand": "puma", "category": "accesoriss", "color": "purple,brown", "gender": "women", "id": "621228716682ceb404a69e75", "picture": "https://picsum.photos/400?image=702", "price": 1513.896, "name": "Brittany Neal" },
    { "brand": "puma", "category": "tshirt", "color": "blue sky", "gender": "men", "id": "62122871b37e4c94421a90b9", "picture": "https://picsum.photos/400?image=665", "price": 1879.761, "name": "Mamie Ballard" },
    ...
  ]; // Full data https://github.com/mediadesain/medes-ui-boilerplate/blob/main/src/app/shared/constant/products.ts
  key: string = 'color';
  selected: {[key: string]: string[]} = ${JSON.stringify(this.selected)};
  colormap: {[key: string]: string} = {
    'blue-sky': '#66ccdd',
    maroon: '#bb6a66',
    brown: '#6b6a6b',
    black: '#000000',
    purple: '#6a66bb',
    gold: '#b6ab66'
  };
...
}`;
componentdemo = `
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

  ngOnInit(): void {
    this.sampledata = SampleProductsData.data;
  }

}
