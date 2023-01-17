import { ProfileNavComponent } from './profile/profile-nav/profile-nav.component';
import { ProfileModule } from './profile/profile.module';
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

@NgModule({
  declarations: [
    BodyComponent,
    ProductComponent,
    FilterComponent,
    PriceFilterComponent,
    RatingFilterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ProductDetailModule,
    CartModule,
    ProfileModule
  ],
  exports: [BodyComponent, ProfileNavComponent]
})
export class BodyModule { }
