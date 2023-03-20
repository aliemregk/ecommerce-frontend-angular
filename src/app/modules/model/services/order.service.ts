import { Observable } from 'rxjs';
import { ListResponse } from './../models/responses/listResponse.model';
import { HttpClient } from '@angular/common/http';
import { ORDER_ENDPOINT, API_URL } from './../../../shared/constants/constants';
import { Order } from '../models/entities/order.model';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends BaseService<Order> {

  constructor(private readonly httpClient: HttpClient) {
    super(httpClient, ORDER_ENDPOINT);
  }

  public getAllByUserId(userId: number): Observable<ListResponse<Order>> {
    return this.httpClient.get<ListResponse<Order>>(API_URL + ORDER_ENDPOINT + "getallbyuserid?id=" + userId);
  }
}
