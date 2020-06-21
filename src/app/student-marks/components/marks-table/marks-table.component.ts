import { StudentDetailsService } from './../../student-marks-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marks-table',
  templateUrl: './marks-table.component.html',
  styleUrls: ['./marks-table.component.css']
})
export class MarksTableComponent implements OnInit {

  studentList = [];
  sortOrderTracker;
  studentProperties = [];
  displayList = []

  constructor(studentDetailsService: StudentDetailsService) {
    studentDetailsService.getStudentMarksData().subscribe(data => {
      this.studentList = data;
      console.log(data);
      this.displayList = Array.from(this.studentList);
      if (this.studentList.length > 0) {
        this.studentProperties = Object.keys(this.studentList[0]);
      }
      this.populateClickTracker();
    })
  }

  ngOnInit(): void {
  }

  populateClickTracker(): void {
    this.sortOrderTracker = new Array(this.studentProperties.length).fill(0);
  }

  getSortOrder(index): string {
    switch (this.sortOrderTracker[index]) {
      case 0:
        return 'ascending';
      case 1:
        return 'descending';
      default:
        return 'original';
    }
  }

  sortTable(index) {
    let sortOrder = this.getSortOrder(index);
    let property = this.studentProperties[index];

    this.sortOrderTracker[index] = (this.sortOrderTracker[index] + 1) % 3;

    console.log(sortOrder)
    if (sortOrder === 'ascending') {
      this.displayList.sort((student1, student2) => {
        if (typeof student1[property] === 'string')
          return ((student1[property]).toUpperCase() > (student2[property]).toUpperCase())?1:-1
        else
          return student1[property] - student2[property]

      })
    } else if (sortOrder === 'descending') {
      this.displayList.sort((student1, student2) => {
        if (typeof student1[property] === 'string')
        return ((student2[property]).toUpperCase() > (student2[property]).toUpperCase())?1:-1
        else
        return student2[property] - student1[property]
      })
    } else {
      this.displayList = Array.from(this.studentList);
    }
  }

  
  

}
