import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  orderDetails: any[] = [
    { id: 1, product: { id: 3, name: "Product 3", unitPrice: 50 }, quantity: 2 },
    { id: 2, product: { id: 1, name: "Product 1", unitPrice: 20 }, quantity: 1 },
    { id: 3, product: { id: 4, name: "Product 4", unitPrice: 70 }, quantity: 1 }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
