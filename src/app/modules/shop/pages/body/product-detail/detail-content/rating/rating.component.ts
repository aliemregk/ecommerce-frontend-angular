import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  // TODO add pipe for value
  protected ratings = [
    { star: 5, value: "35%" },
    { star: 4, value: "45%" },
    { star: 3, value: "10%" },
    { star: 2, value: "5%" },
    { star: 1, value: "5%" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
