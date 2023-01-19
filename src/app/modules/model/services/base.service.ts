import { API_URL } from './../../../shared/constants/constants';
import { SingleResponse } from './../models/responses/singleResponse.model';
import { ListResponse } from './../models/responses/listResponse.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService<T> {

  url: string = "";

  constructor(private readonly http: HttpClient, @Inject(String) protected _url: string) {
    this.url = API_URL + _url;
  }

  public getAll(): Observable<ListResponse<T>> {
    return this.http.get<ListResponse<T>>(this.url + "getall");
  }

  public getById(id: number): Observable<SingleResponse<T>> {
    return this.http.get<SingleResponse<T>>(this.url + "getbyid?id=" + id);
  }

  public add(data: T): Observable<Response> {
    return this.http.post<Response>(this.url + "add", data);
  }

  public update(data: T): Observable<Response> {
    return this.http.patch<Response>(this.url + "update", data);
  }

  public delete(id: number): Observable<Response> {
    return this.http.delete<Response>(this.url + "delete?id=" + id);
  }
}
