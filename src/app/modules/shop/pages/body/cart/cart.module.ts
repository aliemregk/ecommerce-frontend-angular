import { CartComponent } from './cart/cart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [
    CartComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }