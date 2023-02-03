import { OrderDetail } from './../models/entities/order-detail.model';
import { ORDER_DETAIL_ENDPOINT, API_URL } from './../../../shared/constants/constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ListResponse } from '../models/responses/listResponse.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService extends BaseService<OrderDetail> {

  public orderTotal: number = 0;

  constructor(private readonly httpClient: HttpClient) {
    super(httpClient, ORDER_DETAIL_ENDPOINT);
  }

  public getAllByOrderId(orderId: number): Observable<ListResponse<OrderDetail>> {
    return this.httpClient.get<ListResponse<OrderDetail>>(API_URL + ORDER_DETAIL_ENDPOINT + "getallbyorderid?id=" + orderId);
  }
}
