import { CartModule } from './cart/cart.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { ProductComponent } from './product/product.component';
import { FilterComponent } from './filter/filter/filter.component';
import { FormsModule } from '@angular/forms';
import { PriceFilterComponent } from './filter/price-filter/price-filter.component';
import { RatingFilterComponent } from './filter/rating-filter/rating-filter.component';
import { ProductDetailModule } from './product-detail/product-detail.module';
import { ProfileComponent } from './user/profile/profile.component';
import { ProfileNavComponent } from './user/profile-nav/profile-nav.component';
import { UserOrdersComponent } from './user/order/user-orders.component';

@NgModule({
  declarations: [
    BodyComponent,
    ProductComponent,
    FilterComponent,
    PriceFilterComponent,
    RatingFilterComponent,
    ProfileComponent,
    ProfileNavComponent,
    UserOrdersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ProductDetailModule,
    CartModule
  ],
  exports: [BodyComponent]
})
export class BodyModule { }
