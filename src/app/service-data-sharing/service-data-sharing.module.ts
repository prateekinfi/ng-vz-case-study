import { TimerService } from './timer.service';
import { CountDownDisplayComponent } from './components/count-down-display/count-down-display.component';
import { CountDownTimerComponent } from './components/count-down-timer/count-down-timer.component';
import { CountsComponent } from './components/counts/counts.component';
import { LogComponent } from './components/log/log.component';

import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { RouterModule } from '@angular/router';
import { ServiceDataSharingComponent } from './components/service-data-sharing.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        LogComponent,
        CountsComponent,
        CountDownTimerComponent,
        CountDownDisplayComponent,
        ServiceDataSharingComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', component: ServiceDataSharingComponent }]),
        FormsModule
    ],
    providers:[
        TimerService
    ]
})
export class ServiceDataSharingModule {}