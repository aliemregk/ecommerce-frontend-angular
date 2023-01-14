import { CommentsComponent } from './detail-content/comments/comments.component';
import { RatingComponent } from './detail-content/rating/rating.component';
import { DescriptionComponent } from './detail-content/description/description.component';
import { DetailContentComponent } from './detail-content/detail-content/detail-content.component';
import { DetailPanelComponent } from './detail-panel/detail-panel.component';
import { DetailSliderComponent } from './detail-slider/detail-slider.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ProductDetailComponent,
    DetailSliderComponent,
    DetailPanelComponent,
    DetailContentComponent,
    DescriptionComponent,
    RatingComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductDetailModule { }
