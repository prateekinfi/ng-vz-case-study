import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDisplayPageComponent } from './components/product-display-page.component';
import { ProductComponent } from './components/product/product.component';



@NgModule({
  declarations: [ProductDisplayPageComponent, ProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component:  ProductDisplayPageComponent}]),
  ]
})
export class EcommerceCategoryPageModule { }
