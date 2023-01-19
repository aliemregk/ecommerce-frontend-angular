import { CartItem } from './../../models/cart/cartItem.model';
import { createAction, props } from "@ngrx/store";

export const ADD_CART_ITEM = createAction(
    "[Add Cart Item] CartItems", props<CartItem>()
);

export const REMOVE_CART_ITEM = createAction(
    "[Remove Cart Item] CartItems", props<CartItem>()
);

export const UPDATE_CART_ITEM = createAction(
    "[Update Cart Item] CartItems", props<CartItem>()
);

export const CLEAR_CART = createAction(
    "[Clear Cart] CartItems"
);
