import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-filter',
  templateUrl: './rating-filter.component.html',
  styleUrls: ['./rating-filter.component.css']
})
export class RatingFilterComponent implements OnInit {

  protected ratings: number[] = [4, 3, 2, 1];
  protected optionStatus: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  protected clearRatingFilter(): void {
  }
}
