import { StudentDetailsService } from './student-marks-data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarksTableComponent } from './components/marks-table/marks-table.component';



@NgModule({
  declarations: [MarksTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component:  MarksTableComponent}]),
    HttpClientModule
  ],
  providers:[HttpClient,StudentDetailsService]
})
export class StudentMarksModule { }
