import { Category } from '../models/entities/category.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './../../../shared/constants/constants';
import { Injectable } from '@angular/core';
import { ListResponse } from '../models/responses/listResponse.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl: string = API_URL + "categories/";

  constructor(private readonly httpClient: HttpClient) { }

  public getAllCategories(): Observable<ListResponse<Category>> {
    return this.httpClient.get<ListResponse<Category>>(this.apiUrl + "getall");
  }

}
