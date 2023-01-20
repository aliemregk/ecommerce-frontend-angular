import { CartItem } from './../../../../../model/models/cart/cartItem.model';
import { NotificationService } from './../../../../../../shared/services/notification.service';
import { CartService } from './../../../../../model/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    protected readonly cartService: CartService,
    private readonly notificationService: NotificationService
  ) { }

  ngOnInit(): void {
  }

  protected increaseQuantity(item: CartItem): void {
    this.cartService.addToCart(item.product);
  }

  protected decreaseQuantity(item: CartItem): void {
    if (item.quantity != 1) {
      this.cartService.updateQuantity(item, -1);
    }
  }

  protected removeFromCart(item: CartItem): void {
    this.notificationService.error(item.product.name + " removed from cart.")
    this.cartService.removeFromCart(item);
  }

  protected clearCart(): void {
    this.notificationService.info("All items removed from cart.");
    this.cartService.clearCart();
  }

}
