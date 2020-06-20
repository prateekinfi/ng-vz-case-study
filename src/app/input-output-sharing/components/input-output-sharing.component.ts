import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input-output-sharing',
  templateUrl: './input-output-sharing.component.html',
  styleUrls: ['./input-output-sharing.component.css']
})
export class InputOutputSharingComponent {

  log;
  startcount;
  pausecount;
  display=0;

  update(target){
    this.log= target.log;
    this.startcount= target.startcount;
    this.pausecount= target.pausecount;
  }
  updateDisplay(target){
    this.display= target;
  }
}
