import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlockComponent } from './components/block/block.component';
import { BlockContainerComponent } from './components/block-container.component';



@NgModule({
  declarations: [BlockComponent, BlockContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: BlockContainerComponent}])
  ]
})
export class DynamicLoadingModule { }
