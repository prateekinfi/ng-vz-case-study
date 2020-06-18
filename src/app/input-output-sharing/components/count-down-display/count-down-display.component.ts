import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-count-down-display',
  templateUrl: './count-down-display.component.html',
  styleUrls: ['./count-down-display.component.css']
})
export class CountDownDisplayComponent implements OnInit {

@Input() displayvalue;
  constructor() { }

  ngOnInit(): void {
  }

}
