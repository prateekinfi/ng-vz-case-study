import { TimerService } from '../timer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  constructor(private service : TimerService) { }

  logs : string[]= [];
  logvalue :string;

  ngOnInit(): void {
    this.service.emitter.subscribe((e:Object)=>{
          this.logs= e['logs'];
    })
  }

}
