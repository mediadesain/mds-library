import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MdsDateUtils, MdsHightlightPrismModule } from 'medes-ui';
/*-- Medes Team Only --*/
// import { MdsDateUtils, MdsHightlightPrismModule } from 'projects/medes-ui/src/public-api';

@Component({
  selector: 'mds-date-utils',
  templateUrl: './date-utils.component.html',
  styleUrls: ['./date-utils.component.scss'],
  standalone: true,
  imports: [CommonModule, MdsHightlightPrismModule]
})
export class DateUtilsComponent {
import = `
import { MdsDateUtils } from 'medes-ui';`;
demo = `
MdsDateUtils.untilNow(1644684102000); // output ${MdsDateUtils.untilNow(1644684102000)}
MdsDateUtils.untilNow(1644684102000, ['tahun','bulan','hari','jam','menit','detik'], 'lalu'); // output ${MdsDateUtils.untilNow(1644684102000, ['tahun', 'bulan', 'hari', 'jam', 'menit', 'detik'], 'lalu')}`;


  // constructor() { }


}
