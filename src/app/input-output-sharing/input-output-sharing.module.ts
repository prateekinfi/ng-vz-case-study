import { RouterModule } from '@angular/router';
import { CountDownDisplayComponent } from './components/count-down-display/count-down-display.component';
import { CountDownTimerComponent } from './components/count-down-timer/count-down-timer.component';
import { CountsComponent } from './components/counts/counts.component';
import { LogComponent } from './components/log/log.component';

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