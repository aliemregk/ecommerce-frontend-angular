import { PaymentService } from './../../../../../model/services/payment.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from './../../../../../../shared/services/notification.service';
import { SessionService } from './../../../../../model/services/session.service';
import { CartService } from './../../../../../model/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  protected shippingPrice: number = 10;
  protected paymentForm!: FormGroup;

  constructor(
    private readonly cartService: CartService,
    private readonly sessionService: SessionService,
    private readonly formBuilder: FormBuilder,
    private readonly notificationService: NotificationService,
    private readonly paymentService: PaymentService
  ) { }

  ngOnInit(): void {
    this.createPaymentForm();
  }

  private createPaymentForm(): void {
    this.paymentForm = this.formBuilder.group({
      cardHolder: ["", Validators.required],
      cardNumber: ["", Validators.required],
      cvv: ["", Validators.required],
      expiry: ["", Validators.required]
    });
  }

  protected get cartTotal(): number {
    return this.cartService.cartItems.reduce((sum, item) => {
      return sum + (item.product.unitPrice * item.quantity)
    }, 0)
  }

  protected get isLoggedIn(): boolean {
    return this.sessionService.isLoggedIn;
  }

  protected pay(): void {
    if (this.paymentForm.valid) {
      this.paymentService.createOrder(this.cartTotal);
    } else {
      this.notificationService.info("Payment error.");
    }
  }
}
