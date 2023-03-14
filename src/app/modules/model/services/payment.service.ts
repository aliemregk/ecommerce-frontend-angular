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
    private readonly notificationService: NotificationService
  ) { }

  getOrderItems() {
    const orderProducts: Map<number, number> = new Map();
    this.cartService.cartItems.forEach((cartItem) => {
      orderProducts.set(cartItem.product.id, cartItem.quantity)
    });

    return orderProducts;
  }

  createOrder(totalPrice: number) {
    const newOrder: AddOrderRequest = {
      id: 0, delivered: false, deliveryDate: null, orderDate: new Date(), totalPrice: totalPrice, user: this.sessionService.getUser(), orderProducts: this.getOrderItems()
    }
    this.orderService.add(newOrder).subscribe({
      next: () => {
      },
      error: (errorResponse) => {
        this.notificationService.error(errorResponse.error.message);
      }
    });
  }
}
