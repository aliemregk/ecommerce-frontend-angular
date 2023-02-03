import { OrderDetailService } from './../../../../../model/services/order-detail.service';
import { SessionService } from './../../../../../model/services/session.service';
import { Order } from './../../../../../model/models/entities/order.model';
import { OrderService } from './../../../../../model/services/order.service';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit {

  protected orders: Order[] = [];
  protected dataLoaded: boolean = false;

  constructor(
    private readonly orderService: OrderService,
    private readonly sessionService: SessionService,
    private readonly orderDetailService: OrderDetailService
  ) { }

  ngOnInit(): void {
    this.getOrders(this.sessionService.getUser().id);
  }

  public getOrders(userId: number): void {
    this.orderService.getAllByUserId(userId).subscribe({
      next: (response) => {
        this.orders = response.data;
        this.dataLoaded = true;
      },
      error: (errorResponse) => {
        this.dataLoaded = false;
        console.log(errorResponse);
      }
    });
  }

  protected setOrderTotal(total: number): void {
    this.orderDetailService.orderTotal = total;
  }

}
