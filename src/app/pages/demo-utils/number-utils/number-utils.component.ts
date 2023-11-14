import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MdsHightlightPrismModule } from 'medes-ui';

@Component({
  selector: 'mds-number-utils',
  templateUrl: './number-utils.component.html',
  styleUrls: ['./number-utils.component.scss'],
  standalone: true,
  imports: [CommonModule, MdsHightlightPrismModule]
})
export class NumberUtilsComponent {
import = `
import { MdsNumberUtils } from 'medes-ui';`;
demo = `
MdsNumberUtils.shortNumber(15320); // output 15k
MdsNumberUtils.shortNumber(15320, ['rb','jt','mil','tr']); // output 15rb

MdsNumberUtils.toCurrency(15320, 'USD'); // output $15,320
MdsNumberUtils.toCurrency(15320, 'IDR', 2); // output Rp 15.320,00

MdsNumberUtils.getMinMax([3321,6410,1200,567,38,90,404]) // output {min: 38, max: 6410}`;
    // constructor() { }


}
