import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { timer } from 'rxjs/internal/observable/timer';
import { takeWhile, tap } from 'rxjs/operators';


@Component({
  selector: 'app-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.css']
})
export class CountDownTimerComponent implements OnInit {

  @Output() evtemitter;
  @Output() displayemitter;
  startvalue;
  pausevalue;
  timerInputValue;
  flag = 0;
  subscription;
  isTimerActive = false;
  isReset: boolean = false;

  constructor() {
    this.evtemitter = new EventEmitter();
    this.displayemitter = new EventEmitter();
  }

  ngOnInit(): void {
  }

  updateState() {
    if (this.flag === 0 && this.timerInputValue == null) {
      alert('Enter a value in the timer..')
      return
    }

    this.isReset = false;

    let timervalue;

    if (this.timerInputValue) {
      timervalue = this.timerInputValue;
      this.startvalue = this.timerInputValue;
      this.timerInputValue = null;      
    }

    this.isTimerActive = !this.isTimerActive;


    if (this.isTimerActive && this.flag == 0) {
      this.flag = 1;
    }
    else if (this.isTimerActive && this.flag == 1) {
      this.startvalue = this.pausevalue;
    }
    timervalue = this.startvalue;

    this.subscription = timer(0, 1).pipe(
      takeWhile(() => { return (timervalue > 0 && this.isTimerActive && !this.isReset) }),
      tap(() => timervalue--, e => console.log(e), () => {
        this.pausevalue = timervalue;
        this.subscription.unsubscribe();
      }
      )).subscribe(() => {
        this.displayemitter.emit(timervalue);
        if (timervalue == 0) {
          this.isTimerActive = false;
          this.flag = 0;
          this.startvalue = 0;
          this.pausevalue = 0;
        }
      })

    let action = (this.isTimerActive) ? "started" : "paused";
    let count = (this.isTimerActive) ? "startcount" : "pausecount";

    let event = {
      startcount: 0,
      pausecount: 0,
      log: `${action} at ${this.getFormatedDate()}`
    };
    event[count]++

    this.evtemitter.emit(event);

  }

  reset() {
    this.isReset = true;
    this.timerInputValue = null;
    this.isTimerActive = false;
    this.subscription.unsubscribe();
    this.flag = 0;
    this.startvalue = 0;
    this.pausevalue = 0;

    this.displayemitter.emit(0);

    this.evtemitter.emit({
      startcount: 'reset',
      pausecount: 'reset',
      log: `reset at ${this.getFormatedDate()}`
    });
  }

  getFormatedDate() {
    var date = new Date();
    var time = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + " " +
      date.getHours() + ":" + date.getMinutes();
    return time;
  }
}
