import { Component } from '@angular/core';

@Component({
  selector: 'mds-ui-boilerplate',
  templateUrl: './ui-boilerplate.component.html',
  styleUrls: ['./ui-boilerplate.component.scss']
})
export class MdsDocBoilerplateComponent {
samplehtml = `
<div class="group">
  <span>Content</span>
</div>`;
samplescss = `
.body{
  background: #f9f9f9;
  color: #ddd
}`;
samplejs = `
function GetData(values){
  console.log(values);
}`;
samplets = `
import { Component, OnInit } from '@angular/core';
import { HighlightService } from '../shared/utils/highlight.service';

@Component({
  selector: 'mds-library',
  templateUrl: './mds-library.component.html',
  styleUrls: ['./mds-library.component.scss']
})
export class MdsLibraryComponent implements OnInit {

  constructor(
    ...
    private highlightService: HighlightService) {
  }
  ngOnInit() {
    ...
  }
}`;
  // constructor() { }


}
