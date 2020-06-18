import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent {

  logs : string[]= [];
  @Input() 
  logvalue :string;

  constructor() { }
  ngOnChanges(changes:SimpleChanges){
   if(changes.logvalue.currentValue == 'reset')
   this.logs = [];
   else if(changes.logvalue.currentValue)
   this.logs.push(changes.logvalue.currentValue);
  }


}
