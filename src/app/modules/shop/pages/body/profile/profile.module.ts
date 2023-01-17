import { RouterModule } from '@angular/router';
import { UserOrdersComponent } from './order/user-orders.component';
import { ProfileNavComponent } from './profile-nav/profile-nav.component';
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailsComponent } from './order-details/order-details.component';



@NgModule({
  declarations: [
    ProfileComponent,
    ProfileNavComponent,
    UserOrdersComponent,
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ProfileNavComponent]
})
export class ProfileModule { }
