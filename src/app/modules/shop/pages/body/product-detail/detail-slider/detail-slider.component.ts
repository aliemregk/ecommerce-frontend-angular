import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-slider',
  templateUrl: './detail-slider.component.html',
  styleUrls: ['./detail-slider.component.css']
})
export class DetailSliderComponent implements OnInit {

  @Input() productId!: number;
  // TODO add a photo service and fetch photos by product ID
  constructor() { }

  ngOnInit(): void {
  }

}
