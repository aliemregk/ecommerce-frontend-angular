import { OrderDetail } from './../../../../../model/models/entities/order-detail.model';
import { OrderDetailService } from './../../../../../model/services/order-detail.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  protected orderTotalPrice: number = 0;
  protected orderDetails: OrderDetail[] = [];
  protected dataLoaded: boolean = false;

  constructor(
    private readonly orderDetailService: OrderDetailService,
    private readonly activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getUrlParams();
    this.orderTotalPrice = this.orderDetailService.orderTotal;
  }

  private getUrlParams() {
    this.activatedRoute.params.subscribe((params) => {
      this.getOrderDetails(params["orderid"]);
    });
  }

  private getOrderDetails(orderId: number) {
    this.orderDetailService.getAllByOrderId(orderId).subscribe({
      next: (response) => {
        this.orderDetails = response.data;
        this.dataLoaded = true;
      },
      error: (errorResponse) => {
        this.dataLoaded = false;
        console.log(errorResponse);
      }
    });
  }

}
