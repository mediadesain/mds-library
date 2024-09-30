import { Component, OnInit } from '@angular/core';
import { ProductDataModel, SampleProductsData } from 'src/app/shared/constant/products';

@Component({
  selector: 'mds-demo-filter-range-pipe',
  templateUrl: './demo-filter-range-pipe.component.html',
  styleUrls: ['./demo-filter-range-pipe.component.scss']
})
export class DemoFilterRangePipeComponent implements OnInit {
  item: ProductDataModel[];
  params: {propertyKey: string, range: {start: number, end: number}};

  constructor() { }

  ngOnInit(): void {
    this.params = {
      propertyKey: 'price',
      range: { start: 500, end: 1000 }
    }
    this.item = SampleProductsData.data;
  }

}
