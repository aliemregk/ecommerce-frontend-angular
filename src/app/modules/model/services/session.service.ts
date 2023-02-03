import { User } from '../models/entities/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private user: User;
  private token: string;
  public isLoggedIn: boolean = false;

  constructor() { }

  public logout(): void {
    this.setUser(null);
    this.setToken("");
    this.isLoggedIn = false;
  }

  public getUser(): User {
    return this.user;
  }

  public setUser(user: User): void {
    this.user = user;
  }

  public getToken(): string {
    return this.token;
  }

  public setToken(token: string): void {
    this.token = token;
  }

}
