import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class TimerService {
  timer = {
    logs: [],
    displayValue: 0,
    startCount: 0,
    pauseCount: 0,
    reset : false
  }
  emitter = new Subject();
  constructor() { }

  reset(){
    // this.timer.logs=[];
    this.timer.startCount=0;
    this.timer.pauseCount=0;
    this.timer.displayValue=0;
    this.timer.reset=true;
    this.emitData();
  }
  updateLogs(isTimerActive) {
    let action = (isTimerActive) ? "started" : "paused";
    action = (this.timer.reset) ? 'reset' : action;
    this.timer.reset=false;
    var d = new Date();
    var time = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " +
    d.getHours() + ":" + d.getMinutes();
    this.timer.logs.push(`${action} at ${time}`);
    this.emitData();
  }

  updateCounts(isTimerActive) {
    this.timer.reset=false;
    let count = (isTimerActive) ? "startCount" : "pauseCount";
    this.timer[count]++;
    this.emitData();
  }

  updateDisplay(timervalue) {
    this.timer.reset=false;
    this.timer.displayValue = timervalue;
    this.emitData();
  }
  emitData() {
    this.emitter.next(this.timer);
  }

}
