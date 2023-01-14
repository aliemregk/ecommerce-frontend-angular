import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-panel',
  templateUrl: './detail-panel.component.html',
  styleUrls: ['./detail-panel.component.css']
})
export class DetailPanelComponent implements OnInit {

  protected quantity: number = 1;
  protected stock: number = 99;

  constructor() { }

  ngOnInit(): void {
  }

  protected increase(): void {
    if (this.quantity < this.stock) {
      this.quantity++;
    }
  }

  protected decrease(): void {
    if (this.quantity != 1) {
      this.quantity--;
    }
  }
}
