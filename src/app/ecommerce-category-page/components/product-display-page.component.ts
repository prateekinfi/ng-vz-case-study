import { Car } from './../../models/Car';
import { CarDataService } from './../car-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-display-page',
  templateUrl: './product-display-page.component.html',
  styleUrls: ['./product-display-page.component.css']
})
export class ProductDisplayPageComponent implements OnInit {

  productList:Array<Car> = [];
  grid: boolean = true;

   constructor(carservice :CarDataService) {
   carservice.getCarDetails()
  .subscribe(data => {
      this.productList=data;
   });
  }

  ngOnInit(): void {
  }

  sortProductList(order){
    this.productList.sort((productA,productB)=>{
      if(order)
        return productA.price - productB.price;
        else
        return productB.price - productA.price;
    });
  }

  switchView(val) {
    this.grid = val;
  }
}
