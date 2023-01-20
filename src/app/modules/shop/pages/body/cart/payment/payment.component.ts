import { CartService } from './../../../../../model/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  protected shippingPrice: number = 10;

  constructor(private readonly cartService: CartService) { }

  ngOnInit(): void {
  }

  protected get cartTotal(): number {
    return this.cartService.cartItems.reduce((sum, item) => {
      return sum + (item.product.unitPrice * item.quantity)
    }, 0)
  }

}
