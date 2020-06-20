import { Component, OnInit, DoCheck } from '@angular/core';
import { TimerService } from '../../timer.service';
import { timer } from 'rxjs/internal/observable/timer';
import { takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.css']
})
export class CountDownTimerComponent implements OnInit {

  constructor(private service: TimerService) { }
  isTimerActive = false;
  startvalue;
  pausevalue;
  flag = 0;
  
  ngOnInit(): void {
    this.flag = 0;
  }

  updateState(timervalue) {
    if (timervalue > 0) {
      this.isTimerActive = !this.isTimerActive;

      if (this.isTimerActive && this.flag == 0) {
        this.startvalue = timervalue;
        this.flag = 1;
      } else if (this.isTimerActive && this.flag == 1) {
        this.startvalue = this.service.timer.displayValue;
      }
      else if (!this.isTimerActive) {
        this.pausevalue = this.service.timer.displayValue;
      }

      timer(0, 1).pipe(
        takeWhile(() => { return (timervalue > 0 && this.isTimerActive && !this.service.timer.reset) }),
        tap(() => { timervalue--; })
      ).subscribe(() => {
        this.service.updateDisplay(timervalue);
        if (timervalue == 0) {
          this.isTimerActive = !this.isTimerActive;
        }
      });
      this.service.updateCounts(this.isTimerActive);
      this.service.updateLogs(this.isTimerActive);
    }
  }

  reset() {
    this.service.reset();
    this.service.updateLogs(this.isTimerActive);
    this.isTimerActive = false;
    this.flag = 0;
    this.startvalue = 0;
    this.pausevalue = 0;
    this.service.timer.reset = true;
  }
}
