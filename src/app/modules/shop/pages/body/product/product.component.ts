import { SearchService } from './../../../../model/services/search.service';
import { CartService } from './../../../../model/services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../../../model/services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modules/model/models/entities/product.model';
import { NotificationService } from './../../../../../shared/services/notification.service';

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
    private readonly activatedRoute: ActivatedRoute,
    private readonly notificationService: NotificationService,
    private readonly cartService: CartService,
    protected readonly searchService: SearchService
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
        this.notificationService.error(errorResponse.error.message);
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
        this.notificationService.error(errorResponse.error.message);
      }
    })
  }

  protected addToCart(product: Product): void {
    this.notificationService.success(product.name + " added to cart.")
    this.cartService.addToCart(product);
  }
}
