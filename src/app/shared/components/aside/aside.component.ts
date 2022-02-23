import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'medes-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  menu: any[] = [
    {
      title: 'MedesUI',
      links: [
        {text: 'Introduction', url: '/introduction/info'},
        {text: 'How to Install', url: '/introduction/how-to-install'},
        {text: 'Color Scheme', url: '/introduction/color-scheme'}
      ]
    }, {
      title: 'UI Element - Boilerplate',
      links: [
        {text: 'Basic Elements', url: '/ui-boilerplate/basic-elements'},
        {text: 'Image Loader', url: '/ui-boilerplate/image-loader'},
        {text: 'Grid System', url: '/ui-boilerplate/grid-system'},
      ]
    }, {
      title: 'Filter Components',
      links: [
        {text: 'Intro', url: '/filter-components/intro'},
        {text: 'Checkboxes Filter', url: '/filter-components/checkboxes'},
        {text: 'Swatch Filter', url: '/filter-components/swatch'},
        {text: 'Reset Filter', url: '/filter-components/reset'},
        {text: 'Demo', url: '/filter-components/demo'}
      ]
    }, {
      title: 'Others',
      links: [
        {text: 'PrismJs Highlight', url: '/prismjs-highlight'}
      ]
    }, {
      title: 'Deprecated',
      links: [
        {text: 'Multiple Filter Checkbox', url: '/filter-checkbox'}
      ]
    }, {
      title: 'Utilities',
      links: [
        {text: 'String', url: '/string-utils'},
        {text: 'Integer', url: '/number-utils'},
        {text: 'Object', url: '/object-utils'},
        {text: 'Array', url: '/array-utils'},
        {text: 'Date', url: '/date-utils'}
      ]
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}