import { Observable } from 'rxjs';
import { API_URL } from './../../../shared/constants/constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponse } from '../models/responses/listResponse.model';
import { Product } from '../models/entities/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl: string = API_URL + "products";

  constructor(private readonly httpClient: HttpClient) { }

  public getAllProducts(): Observable<ListResponse<Product>> {
    return this.httpClient.get<ListResponse<Product>>(this.apiUrl + "/getall");
  }
}
