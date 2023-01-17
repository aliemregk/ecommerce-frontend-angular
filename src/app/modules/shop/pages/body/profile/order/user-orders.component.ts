import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit {

  orders = [
    { id: 1, orderDate: "10/01/2023", status: "Delivered", deliveryDate: "14/01/2023" },
    { id: 2, orderDate: "15/01/2023", status: "Shipping", deliveryDate: "" },
    { id: 3, orderDate: "16/01/2023", status: "Preparing", deliveryDate: "" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
