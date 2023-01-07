import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { ProductComponent } from './product/product.component';
import { FilterComponent } from './filter/filter/filter.component';
import { FormsModule } from '@angular/forms';
import { PriceFilterComponent } from './filter/price-filter/price-filter.component';
import { RatingFilterComponent } from './filter/rating-filter/rating-filter.component';
import { ProductDetailComponent } from './product-detail/product-detail/product-detail.component';
import { DetailSliderComponent } from './product-detail/detail-slider/detail-slider.component';
import { DetailContentComponent } from './product-detail/detail-content/detail-content/detail-content.component';
import { DetailPanelComponent } from './product-detail/detail-panel/detail-panel.component';

@NgModule({
  declarations: [
    BodyComponent,
    ProductComponent,
    FilterComponent,
    PriceFilterComponent,
    RatingFilterComponent,
    ProductDetailComponent,
    DetailSliderComponent,
    DetailPanelComponent,
    DetailContentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [BodyComponent]
})
export class BodyModule { }
