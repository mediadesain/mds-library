import { Component } from '@angular/core';

@Component({
  selector: 'mds-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {
  menu: {title: string; links: {text: string; url: string}[]}[] = [
    {
      title: 'MedesUI',
      links: [
        // {text: 'Introduction', url: '/introduction/info'},
        {text: 'How to Install', url: '/introduction/how-to-install'},
        {text: 'Color Scheme', url: '/introduction/color-scheme'}
      ]
    }, {
      title: 'UI Element - Boilerplate',
      links: [
        {text: 'Basic Elements', url: '/ui-boilerplate/basic-elements'},
        {text: 'Layout Utils', url: '/ui-boilerplate/layout-utils'},
        {text: 'Grid System', url: '/ui-boilerplate/grid-system'},
        {text: 'Image Loader', url: '/ui-boilerplate/image-loader'}
      ]
    }, {
      title: 'Filter Components',
      links: [
        {text: 'Intro', url: '/filter-components/intro'},
        {text: 'Checkboxes Filter', url: '/filter-components/checkboxes'},
        {text: 'Swatch Filter', url: '/filter-components/swatch'},
        {text: 'Reset Filter', url: '/filter-components/reset'},
        {text: '<i class="fas fa-external-link-alt"></i> Demo', url: '/filter-components/demo'}
      ]
    }, {
      title: 'Modal Components',
      links: [
        {text: 'Intro', url: 'modal-component/intro'},
        {text: 'Modal Component', url: 'modal-component/detail'},
        {text: '<i class="fas fa-external-link-alt"></i> Demo', url: 'modal-component/demo'},
      ]
    }, {
      title: 'Other Components',
      links: [
        {text: 'PrismJs Highlight', url: '/prismjs-highlight'}
      ]
    },{
      title: 'Pipes',
      links: [
        {text: 'Filter', url: '/pipe/filter'},
        {text: 'Search', url: '/pipe/search'},
        {text: 'Safe Url', url: '/pipe/safeurl'}
      ]
    },{
      title: 'Utilities',
      links: [
        {text: 'String', url: '/utils/string'},
        {text: 'Integer', url: '/utils/number'},
        {text: 'Object', url: '/utils/object'},
        {text: 'Array', url: '/utils/array'},
        {text: 'Date', url: '/utils/date'},
        {text: 'Color', url: '/utils/color'}
      ]
    }
  ];
  // constructor() { }

  resetScroll(){
    document.getElementById('article').scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
