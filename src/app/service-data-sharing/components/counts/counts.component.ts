import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-counts',
  templateUrl: './counts.component.html',
  styleUrls: ['./counts.component.css']
})
export class CountsComponent implements OnInit {

  pausecount = 0;
  startcount = 0;
  pausecountvalue;
  startcountvalue;

  constructor(private service: TimerService) { }

  ngOnInit(): void {
    this.service.emitter.subscribe((e: Object) => {
      this.startcount =e['startCount'];
      this.pausecount =e['pauseCount'];
    })
  }

}
