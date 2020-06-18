import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-counts',
  templateUrl: './counts.component.html',
  styleUrls: ['./counts.component.css']
})
export class CountsComponent implements OnInit {
  pausecount=0;
  startcount=0;
  @Input() pausecountvalue;
  @Input() startcountvalue;

  constructor() { }

  ngOnChanges(changes: SimpleChange){
    if(this.pausecountvalue == 'reset')
    {
      this.pausecount=0;
      this.startcount=0;
    }
    else if(this.pausecountvalue)
    this.pausecount++;
    else if(this.startcountvalue)
    this.startcount++;
  }

  ngOnInit(): void {
  }

}
