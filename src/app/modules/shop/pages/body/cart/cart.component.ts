import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
    {name: "product 1", quantity: 2, price: 50},
    {name: "product 2", quantity: 1, price: 20},
    {name: "product 3", quantity: 1, price: 15},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
