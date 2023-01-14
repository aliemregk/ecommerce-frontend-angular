import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { ProductComponent } from './product/product.component';
import { FilterComponent } from './filter/filter/filter.component';
import { FormsModule } from '@angular/forms';
import { PriceFilterComponent } from './filter/price-filter/price-filter.component';
import { RatingFilterComponent } from './filter/rating-filter/rating-filter.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailModule } from './product-detail/product-detail.module';

@NgModule({
  declarations: [
    BodyComponent,
    ProductComponent,
    FilterComponent,
    PriceFilterComponent,
    RatingFilterComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ProductDetailModule
  ],
  exports: [BodyComponent]
})
export class BodyModule { }
