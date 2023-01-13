import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
    { name: "product 1", image: "https://picsum.photos/id/1/80", description: "Lorem ipsum dolor sit amet consectetur.", quantity: 1, unitPrice: 20 },
    { name: "product 2", image: "https://picsum.photos/id/2/80", description: "Lorem ipsum dolor sit amet consectetur.", quantity: 4, unitPrice: 28 },
    { name: "product 3", image: "https://picsum.photos/id/3/80", description: "Lorem ipsum dolor sit amet consectetur.", quantity: 1, unitPrice: 15 },
    { name: "product 4", image: "https://picsum.photos/id/4/80", description: "Lorem ipsum dolor sit amet consectetur.", quantity: 3, unitPrice: 37 },
    { name: "product 5", image: "https://picsum.photos/id/5/80", description: "Lorem ipsum dolor sit amet consectetur.", quantity: 1, unitPrice: 65 },
    { name: "product 6", image: "https://picsum.photos/id/6/80", description: "Lorem ipsum dolor sit amet consectetur.", quantity: 2, unitPrice: 50 }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
