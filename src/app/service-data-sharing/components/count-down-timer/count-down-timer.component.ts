import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../timer.service';
import { timer } from 'rxjs/internal/observable/timer';
import { takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.css']
})
export class CountDownTimerComponent implements OnInit {

  constructor(private service : TimerService) { }
  isTimerActive = false;


  ngOnInit(): void {
  }
  updateState(timervalue){
    this.isTimerActive=!this.isTimerActive;

   timer(0,1).pipe(
      takeWhile(() => {return (timervalue > 0 && this.isTimerActive && !this.service.timer.reset)}),
      tap(()=>timervalue--)
    ).subscribe(()=>{
      this.service.updateDisplay(timervalue);
    })
    this.service.updateCounts(this.isTimerActive);
    this.service.updateLogs(this.isTimerActive);
  }

  reset(){
    this.service.reset();
  }
}
