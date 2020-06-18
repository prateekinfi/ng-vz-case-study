import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../timer.service';

@Component({
  selector: 'app-count-down-display',
  templateUrl: './count-down-display.component.html',
  styleUrls: ['./count-down-display.component.css']
})
export class CountDownDisplayComponent implements OnInit {

  constructor(private service: TimerService) { }
  displayvalue: number = 0;
  ngOnInit(): void {
    this.service.emitter.subscribe((e: Object) => {
      this.displayvalue = e['displayValue']
    })
  }

}
