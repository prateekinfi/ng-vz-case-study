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
  timerInputValue;
  subscription;
  flag = 0;

  ngOnInit(): void {
    this.flag = 0;
  }

  updateState() {
    if(this.flag === 0 && this.timerInputValue == null)
    {
      alert('Enter a value in the timer..')
      return
    }

    let timervalue;

    if (this.timerInputValue) {
      timervalue = this.timerInputValue;
      this.startvalue = this.timerInputValue;
      this.timerInputValue = null;
    }

    this.isTimerActive = !this.isTimerActive;

    if (this.isTimerActive && this.flag == 0) {
      timervalue = this.startvalue;
      this.flag = 1;
    }
    else if (this.isTimerActive && this.flag == 1) {
      this.startvalue = this.pausevalue;
      timervalue = this.startvalue;
    } else {
      this.pausevalue = timervalue;
    }
    this.subscription = timer(0, 1).pipe(
      takeWhile(() => {
        return (timervalue > 0 && this.isTimerActive && !this.service.timer.reset)
      }),
      tap(() => timervalue--, e => console.log(e), () => {
        this.pausevalue = timervalue;
        console.log('herer' + this.pausevalue);
        this.subscription.unsubscribe();
      }
      )
    ).subscribe((x) => {

      this.service.updateDisplay(timervalue);
      if (timervalue == 0) {
        this.isTimerActive = false;
        this.flag = 0;
        this.startvalue = 0;
        this.pausevalue = 0;
      }
    });
    this.service.updateCounts(this.isTimerActive);
    this.service.updateLogs(this.isTimerActive);
  }

  reset() {
    this.timerInputValue = null;
    this.subscription.unsubscribe();
    this.service.reset();
    this.service.updateLogs(this.isTimerActive);
    this.isTimerActive = false;
    this.flag = 0;
    this.startvalue = 0;
    this.pausevalue = 0;
    this.service.timer.reset = true;
  }
}
