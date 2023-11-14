import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StringUtilsComponent } from './string-utils/string-utils.component';
import { NumberUtilsComponent } from './number-utils/number-utils.component';
import { ObjectUtilsComponent } from './object-utils/object-utils.component';
import { ArrayUtilsComponent } from './aray-utils/aray-utils.component';
import { DateUtilsComponent } from './date-utils/date-utils.component';
import { ColorUtilsComponent } from './color-utils/color-utils.component';

const routes: Routes = [
  { path: '', redirectTo: 'string', pathMatch: 'full' },
  { path: 'string', component: StringUtilsComponent },
  { path: 'number', component: NumberUtilsComponent },
  { path: 'object', component: ObjectUtilsComponent },
  { path: 'array', component: ArrayUtilsComponent },
  { path: 'date', component: DateUtilsComponent },
  { path: 'color', component: ColorUtilsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoUtilsRoutingModule { }
