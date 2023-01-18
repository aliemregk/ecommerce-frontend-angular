import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Injectable } from '@angular/core';
import { Product } from '../models/entities/product.model';
import { PRODUCT_ENDPOINT } from 'src/app/shared/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService<Product>{

  constructor(http: HttpClient) {
    super(http, PRODUCT_ENDPOINT);
  }
}
