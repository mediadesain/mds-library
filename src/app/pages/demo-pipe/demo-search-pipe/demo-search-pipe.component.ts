import { Component, OnInit } from '@angular/core';
import { SampleProductsData } from 'src/app/shared/constant/products';

@Component({
  selector: 'mds-demo-search-pipe',
  templateUrl: './demo-search-pipe.component.html',
  styleUrls: ['./demo-search-pipe.component.scss']
})
export class DemoSearchPipeComponent implements OnInit {
  item = [];
  params = {
    propertyKey: 'name',
    keyword: 'agnes'
  }
  constructor() { }

  ngOnInit(): void {
    this.item = SampleProductsData.data;
  }
}
