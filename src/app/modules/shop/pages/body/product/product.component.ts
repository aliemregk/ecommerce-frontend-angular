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

  constructor(private readonly productService: ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  private getAllProducts(): void {
    this.productService.getAll().subscribe({
      next: (response) => {
        this.products = response.data;
        this.dataLoaded = true;
      },
      error: (errorResponse) => {
        this.dataLoaded = false;
        console.log(errorResponse);
      }
    })
  }
}
