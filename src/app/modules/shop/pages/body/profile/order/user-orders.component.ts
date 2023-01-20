import { Order } from './../../../../../model/models/entities/order.model';
import { OrderService } from './../../../../../model/services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit {

  protected orders: Order[] = [];
  protected dataLoaded: boolean = false;

  constructor(private readonly orderService: OrderService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  public getOrders(): void {
    // TODO refactor for user id
    this.orderService.getAllByUserId(3).subscribe({
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

}
