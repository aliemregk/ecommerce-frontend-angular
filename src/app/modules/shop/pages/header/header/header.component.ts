import { SessionService } from './../../../../model/services/session.service';
import { CartService } from './../../../../model/services/cart.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() show: boolean = true;

  constructor(
    private readonly cartService: CartService,
    private readonly sessionService: SessionService
  ) { }

  ngOnInit(): void {

  }

  public get itemsInCart(): number {
    return this.cartService.cartItems.length;
  }

  public get isLoggedIn(): boolean {
    return this.sessionService.isLoggedIn;
  }

  protected logout(): void {
    this.sessionService.logout();
  }

}
