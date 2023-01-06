import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { ProductComponent } from './product/product.component';
import { FilterComponent } from './filter/filter/filter.component';
import { FormsModule } from '@angular/forms';
import { PriceFilterComponent } from './filter/price-filter/price-filter.component';
import { RatingFilterComponent } from './filter/rating-filter/rating-filter.component';

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
    FormsModule
  ],
  exports: [BodyComponent]
})
export class BodyModule { }
