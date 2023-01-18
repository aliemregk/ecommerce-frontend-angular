import { Product } from 'src/app/modules/model/models/entities/product.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-panel',
  templateUrl: './detail-panel.component.html',
  styleUrls: ['./detail-panel.component.css']
})
export class DetailPanelComponent implements OnInit {

  @Input() product!: Product;
  protected quantity: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  protected increase(): void {
    if (this.quantity < this.product.stock) {
      this.quantity++;
    }
  }

  protected decrease(): void {
    if (this.quantity != 1) {
      this.quantity--;
    }
  }
}
