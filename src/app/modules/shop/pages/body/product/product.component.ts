import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../../../model/services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modules/model/models/entities/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  protected products!: Product[];
  protected dataLoaded: boolean = false;

  constructor(
    private readonly productService: ProductService,
    private readonly activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params["categoryid"]) {
        this.getAllProductsByCategory(params["categoryid"])
      } else {
        this.getAllProducts();
      }
    });
  }

  private getAllProducts(): void {
    this.productService.getAll().subscribe({
      next: (response) => {
        this.dataLoaded = true;
        this.products = response.data;
      },
      error: (errorResponse) => {
        this.dataLoaded = false;
        console.log(errorResponse);
      }
    })
  }

  private getAllProductsByCategory(categoryId: number): void {
    this.productService.getAllProductsByCategoryId(categoryId).subscribe({
      next: (response) => {
        this.dataLoaded = true;
        this.products = response.data;
      },
      error: (errorResponse) => {
        this.dataLoaded = false;
        console.log(errorResponse);
      }
    })
  }

}
