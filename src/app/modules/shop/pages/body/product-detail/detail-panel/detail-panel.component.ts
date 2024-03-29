import { CartService } from './../../../../../model/services/cart.service';
import { NotificationService } from './../../../../../../shared/services/notification.service';
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

  constructor(
    private readonly notificationService: NotificationService,
    private readonly cartService: CartService
  ) { }

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

  protected addToCart(product: Product): void {
    this.notificationService.success(product.name + " added to cart.")
    this.cartService.addToCart(product, this.quantity);
  }
}
