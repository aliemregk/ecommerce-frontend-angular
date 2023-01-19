import { ListResponse } from './../models/responses/listResponse.model';
import { Observable } from 'rxjs';
import { API_URL } from './../../../shared/constants/constants';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Injectable } from '@angular/core';
import { Product } from '../models/entities/product.model';
import { PRODUCT_ENDPOINT } from 'src/app/shared/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService<Product>{

  constructor(private readonly httpClient: HttpClient) {
    super(httpClient, PRODUCT_ENDPOINT);
  }

  getAllProductsByCategoryId(categoryId: number): Observable<ListResponse<Product>> {
    return this.httpClient.get<ListResponse<Product>>(API_URL + PRODUCT_ENDPOINT + "getallbycategoryid?id=" + categoryId);
  }
}
