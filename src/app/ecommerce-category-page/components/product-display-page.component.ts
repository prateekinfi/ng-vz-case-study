import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-display-page',
  templateUrl: './product-display-page.component.html',
  styleUrls: ['./product-display-page.component.css']
})
export class ProductDisplayPageComponent implements OnInit {

  numbers: Array<number>;
  grid: boolean = true;
  constructor() {
    this.numbers = Array(40).fill(0).map((x, i) => i);
  }

  ngOnInit(): void {
  }

  switchView(val) {
    this.grid = val;
  }
}
