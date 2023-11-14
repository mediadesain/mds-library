import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdsHightlightPrismModule } from 'medes-ui';

@Component({
  selector: 'mds-layout-utils',
  templateUrl: './layout-utils.component.html',
  styleUrls: ['./layout-utils.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, MdsHightlightPrismModule]
})
export class LayoutUtilsComponent {
  paddingOptions = [
    {label:'No Padding', value:'padding-0'},
    {label:'Padding 1', value:'padding-1'},
    {label:'Padding 2', value:'padding-2'},
    {label:'Padding 3', value:'padding-3'},
    {label:'No Padding Top', value:'padding-t-0'},
    {label:'Padding Top 1', value:'padding-t-1'},
    {label:'Padding Top 2', value:'padding-t-2'},
    {label:'Padding Top 3', value:'padding-t-3'},
    {label:'No Padding Right', value:'padding-r-0'},
    {label:'Padding Right 1', value:'padding-r-1'},
    {label:'Padding Right 2', value:'padding-r-2'},
    {label:'Padding Right 3', value:'padding-r-3'},
    {label:'No Padding Bottom', value:'padding-b-0'},
    {label:'Padding Bottom 1', value:'padding-b-1'},
    {label:'Padding Bottom 2', value:'padding-b-2'},
    {label:'Padding Bottom 3', value:'padding-b-3'},
    {label:'No Padding Left', value:'padding-l-0'},
    {label:'Padding Left 1', value:'padding-l-1'},
    {label:'Padding Left 2', value:'padding-l-2'},
    {label:'Padding Left 3', value:'padding-l-3'},
    {label:'No Padding Vertical', value:'padding-vertical-0'},
    {label:'Padding Vertical 1', value:'padding-vertical-1'},
    {label:'Padding Vertical 2', value:'padding-vertical-2'},
    {label:'Padding Vertical 3', value:'padding-vertical-3'},
    {label:'No Padding Horizontal', value:'padding-horizontal-0'},
    {label:'Padding Horizontal 1', value:'padding-horizontal-1'},
    {label:'Padding Horizontal 2', value:'padding-horizontal-2'},
    {label:'Padding Horizontal 3', value:'padding-horizontal-3'}
  ];
  marginOptions = [
    {label:'No Margin', value:'margin-0'},
    {label:'Margin 1', value:'margin-1'},
    {label:'Margin 2', value:'margin-2'},
    {label:'Margin 3', value:'margin-3'},
    {label:'No Margin Top', value:'margin-t-0'},
    {label:'Margin Top 1', value:'margin-t-1'},
    {label:'Margin Top 2', value:'margin-t-2'},
    {label:'Margin Top 3', value:'margin-t-3'},
    {label:'No Margin Right', value:'margin-r-0'},
    {label:'Margin Right 1', value:'margin-r-1'},
    {label:'Margin Right 2', value:'margin-r-2'},
    {label:'Margin Right 3', value:'margin-r-3'},
    {label:'No Margin Bottom', value:'margin-b-0'},
    {label:'Margin Bottom 1', value:'margin-b-1'},
    {label:'Margin Bottom 2', value:'margin-b-2'},
    {label:'Margin Bottom 3', value:'margin-b-3'},
    {label:'No Margin Left', value:'margin-l-0'},
    {label:'Margin Left 1', value:'margin-l-1'},
    {label:'Margin Left 2', value:'margin-l-2'},
    {label:'Margin Left 3', value:'margin-l-3'},
    {label:'No Margin Vertical', value:'margin-vertical-0'},
    {label:'Margin Vertical 1', value:'margin-vertical-1'},
    {label:'Margin Vertical 2', value:'margin-vertical-2'},
    {label:'Margin Vertical 3', value:'margin-vertical-3'},
    {label:'No Margin Horizontal', value:'margin-horizontal-0'},
    {label:'Margin Horizontal 1', value:'margin-horizontal-1'},
    {label:'Margin Horizontal 2', value:'margin-horizontal-2'},
    {label:'Margin Horizontal 3', value:'margin-horizontal-3'}
  ];
  flexDirection = [
    {label: 'Horizontal',value: 'flex-horizontal'},
    {label: 'Vertical', value: 'flex-vertical'}
  ];
  justifyItems = [
    {label: 'Justify Start', value: 'justify-start'},
    {label: 'Justify Center', value: 'justify-center'},
    {label: 'Justify End', value: 'justify-right'},
    {label: 'Justify Arround', value: 'justify-around'},
    {label: 'Justify Between', value: 'justify-between'}
  ];
  alignItems = [
    {label: 'Align Start', value: 'align-start'},
    {label: 'Align Middle', value: 'align-middle'},
    {label: 'Align End', value: 'align-end'},
    {label: 'Align Arround', value: 'align-around'},
    {label: 'Align Between', value: 'align-between'}
  ]
  constructor() {}

}
