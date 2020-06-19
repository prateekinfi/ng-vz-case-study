import { CarDataService } from './car-data.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDisplayPageComponent } from './components/product-display-page.component';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [ProductDisplayPageComponent, ProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component:  ProductDisplayPageComponent}]),
    HttpClientModule
  ],
  providers:[CarDataService]
})
export class EcommerceCategoryPageModule { }
