import { UPDATE_CART_ITEM } from './../state-management/cart-state/cartItem.action';
import { NotificationService } from './../../../shared/services/notification.service';
import { Product } from './../models/entities/product.model';
import { CartItem } from './../models/cart/cartItem.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ADD_CART_ITEM } from '../state-management/cart-state/cartItem.action';
import { getCart } from '../state-management/cart-state/cartItem.selector';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItems: CartItem[] = [];
  private cartItem!: CartItem | undefined;

  constructor(
    private readonly store: Store,
    private readonly notificationService: NotificationService
  ) { }

  public getCart(): void {
    this.store.select(getCart).subscribe({
      next: (data) => {
        this.cartItems = data
      },
      error: () => {
        this.notificationService.error("Cart Data Error");
      }
    });
  }

  public addToCart(product: Product): void {
    if (this.checkIfExistsInCart(product)) {
      const updateItem: CartItem = { product: product, quantity: this.cartItem!.quantity + 1 }
      this.store.dispatch(UPDATE_CART_ITEM(updateItem));
    } else {
      const newItem: CartItem = { product: product, quantity: 1 }
      this.store.dispatch(ADD_CART_ITEM(newItem));
    }
  }

  private checkIfExistsInCart(itemToCheck: Product): boolean {
    this.getCart();
    this.cartItem = this.cartItems.find(item => item.product.id === itemToCheck.id);
    return this.cartItem != undefined ? true : false
  }
}
