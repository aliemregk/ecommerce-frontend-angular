import { API_URL } from './../../../shared/constants/constants';
import { ListResponse } from './../models/responses/listResponse.model';
import { Observable } from 'rxjs';
import { USER_ENDPOINT } from 'src/app/shared/constants/constants';
import { HttpClient } from '@angular/common/http';
import { User } from './../models/entities/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly url = API_URL + USER_ENDPOINT;

  constructor(private readonly http: HttpClient) {
  }

  public getAll(): Observable<ListResponse<User>> {
    return this.http.get<ListResponse<User>>(this.url + "getall");
  }

  public update(data: User): Observable<Response> {
    return this.http.patch<Response>(this.url + "update", data);
  }

  public delete(id: number): Observable<Response> {
    return this.http.delete<Response>(this.url + "delete?id=" + id);
  }
}
