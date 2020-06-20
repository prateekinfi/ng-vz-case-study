import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnChanges {

  logs: string[] = [];

  @Input() logvalue: string;

  constructor() { }
  ngOnChanges(changes: SimpleChanges) {
    if(changes.logvalue.currentValue)
    this.logs.push(changes.logvalue.currentValue);
  }


}
