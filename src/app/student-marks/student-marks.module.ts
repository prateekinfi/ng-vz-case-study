import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarksTableComponent } from './components/marks-table/marks-table.component';



@NgModule({
  declarations: [MarksTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component:  MarksTableComponent}])
  ]
})
export class StudentMarksModule { }
