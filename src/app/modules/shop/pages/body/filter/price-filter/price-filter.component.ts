import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['./price-filter.component.css']
})
export class PriceFilterComponent implements OnInit {

  protected maxPrice!: number;
  protected minPrice!: number;

  constructor() { }

  ngOnInit(): void {
  }

  protected clearPriceFilter(): void {
    this.maxPrice = 0;
    this.minPrice = 0;
  }
}
