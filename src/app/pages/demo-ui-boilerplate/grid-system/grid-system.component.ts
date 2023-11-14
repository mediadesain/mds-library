import { CommonModule, SlicePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdsHightlightPrismModule } from 'medes-ui';
import { SampleProductsData } from 'src/app/shared/constant/products';

@Component({
  selector: 'mds-grid-system',
  templateUrl: './grid-system.component.html',
  styleUrls: ['./grid-system.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, SlicePipe, MdsHightlightPrismModule]
})
export class GridSystemComponent implements OnInit {
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
  gridsmall: string[] = ['unset', 'g-s-20', 'g-s-25', 'g-s-30', 'g-s-35', 'g-s-40', 'g-s-45', 'g-s-50', 'g-s-55', 'g-s-60', 'g-s-65', 'g-s-70', 'g-s-75', 'g-s-80', 'g-s-85', 'g-s-90', 'g-s-95', 'g-s-100'];
  gridmedium: string[] = ['unset', 'g-m-20', 'g-m-25', 'g-m-30', 'g-m-35', 'g-m-40', 'g-m-45', 'g-m-50', 'g-m-55', 'g-m-60', 'g-m-65', 'g-m-70', 'g-m-75', 'g-m-80', 'g-m-85', 'g-m-90', 'g-m-95', 'g-m-100'];
  gridlarge: string[] = ['g-l-20', 'g-l-25', 'g-l-30', 'g-l-35', 'g-l-40', 'g-l-45', 'g-l-50', 'g-l-55', 'g-l-60', 'g-l-65', 'g-l-70', 'g-l-75', 'g-l-80', 'g-l-85', 'g-l-90', 'g-l-95', 'g-l-100'];
  // constructor() { }

  ngOnInit(): void {
    this.sampledata = SampleProductsData.data;
  }

}
