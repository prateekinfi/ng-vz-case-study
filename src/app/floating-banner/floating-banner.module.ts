import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatingBannerComponent } from './components/floating-banner.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: FloatingBannerComponent }])
  ]
})
export class FloatingBannerModule { }
