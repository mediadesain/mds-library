import { Component, OnInit } from '@angular/core';
import { SampleProductsData } from 'src/app/shared/constant/products';

@Component({
  selector: 'mds-demo-filter-pipe',
  templateUrl: './demo-filter-pipe.component.html',
  styleUrls: ['./demo-filter-pipe.component.scss']
})
export class DemoFilterPipeComponent implements OnInit {
  item = [];
  params = {
    brand: ['nike', 'puma'],
    category: ['bag'],
    gender: ['women']
  }
  constructor() { }

  ngOnInit(): void {
    this.item = SampleProductsData.data;
  }
}
