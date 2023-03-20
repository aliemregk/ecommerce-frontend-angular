import { Router } from '@angular/router';
import { OrderProduct } from '../models/types/order-products.type';
import { OrderStatus } from '../models/enums/order-status.enum';
import { NotificationService } from './../../../shared/services/notification.service';
import { CartService } from './cart.service';
import { SessionService } from './session.service';
import { AddOrderRequest } from '../models/entities/add-order-request.model';
import { OrderService } from './order.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private readonly orderService: OrderService,
    private readonly sessionService: SessionService,
    private readonly cartService: CartService,
    private readonly notificationService: NotificationService,
    private readonly router: Router
  ) { }

  private getOrderItems() {
    const orderProducts: OrderProduct = {};
    this.cartService.cartItems.forEach((cartItem) => {
      orderProducts[cartItem.product.id] = cartItem.quantity;
    });
    return orderProducts;
  }

  public createOrder(totalPrice: number) {
    const newOrder: AddOrderRequest = {
      id: 0, status: OrderStatus.PREPARING, deliveryDate: null, orderDate: new Date(), totalPrice: totalPrice, user: this.sessionService.getUser(), orderProducts: this.getOrderItems()
    }

    this.orderService.add(newOrder).subscribe({
      next: () => {
        this.notificationService.success("Payment succeed. " + totalPrice + "$");
        this.router.navigate([""]);
        this.cartService.clearCart();
      },
      error: (errorResponse) => {
        this.notificationService.error(errorResponse.error.message);
      }
    });
  }
}
