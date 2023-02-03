import { RegisterModel } from './../models/auth/register.model';
import { API_URL, AUTH_ENDPOINT } from '../../../shared/constants/constants';
import { LoginModel } from '../models/auth/login.model';
import { AuthResponse } from '../models/auth/authResponse.model';
import { SingleResponse } from '../models/responses/singleResponse.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly httpClient: HttpClient) { }

  public login(loginModel: LoginModel): Observable<SingleResponse<AuthResponse>> {
    return this.httpClient.post<SingleResponse<AuthResponse>>(API_URL + AUTH_ENDPOINT + "login", loginModel);
  }

  public register(registerModel: RegisterModel): Observable<SingleResponse<AuthResponse>> {
    return this.httpClient.post<SingleResponse<AuthResponse>>(API_URL + AUTH_ENDPOINT + "register", registerModel);
  }
}
