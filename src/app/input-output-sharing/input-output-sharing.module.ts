import { RouterModule } from '@angular/router';
import { CountDownDisplayComponent } from './count-down-display/count-down-display.component';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';
import { CountsComponent } from './counts/counts.component';
import { LogComponent } from './log/log.component';

import { NgModule } from '@angular/core';
import { InputOutputSharingComponent } from './components/input-output-sharing.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        LogComponent,
        CountsComponent,
        CountDownTimerComponent,
        CountDownDisplayComponent,
        InputOutputSharingComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', component: InputOutputSharingComponent }]),

    ],
    exports: [
        LogComponent,
        CountsComponent,
        CountDownTimerComponent,
        CountDownDisplayComponent
    ]
})
export class InputOutputSharingModule { }