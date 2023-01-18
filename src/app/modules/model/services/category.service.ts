import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Category } from '../models/entities/category.model';
import { Injectable } from '@angular/core';
import { CATEGORY_ENDPOINT } from 'src/app/shared/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService<Category>{

  constructor(private readonly httpClient: HttpClient) {
    super(httpClient, CATEGORY_ENDPOINT);
  }
}
