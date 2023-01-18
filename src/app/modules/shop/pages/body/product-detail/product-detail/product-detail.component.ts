import { Product } from 'src/app/modules/model/models/entities/product.model';
import { ProductService } from './../../../../../model/services/product.service';
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Output() protected product!: Product;
  protected dataLoaded: boolean = false;

  constructor(
    private readonly productService: ProductService,
    private readonly activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getProductById(params["productid"]);
    });
  }

  protected getProductById(productId: number) {
    this.productService.getById(productId).subscribe({
      next: (response) => {
        this.product = response.data;
        this.dataLoaded = true;
      },
      error: (errorResponse) => {
        this.dataLoaded = false;
        console.log(errorResponse);
      }
    });
  }
}
