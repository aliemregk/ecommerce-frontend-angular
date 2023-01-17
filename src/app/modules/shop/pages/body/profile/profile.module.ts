import { RouterModule } from '@angular/router';
import { UserOrdersComponent } from './order/user-orders.component';
import { ProfileNavComponent } from './profile-nav/profile-nav.component';
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ProfileComponent,
    ProfileNavComponent,
    UserOrdersComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ProfileNavComponent]
})
export class ProfileModule { }
