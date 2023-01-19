import { CartState } from './cartItem.state';
import { CartItem } from './../../models/cart/cartItem.model';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectCartState = createFeatureSelector<CartState<CartItem>>('cartItems');

export const selectCart = (state: CartState<CartItem>) => state.data;

export const getCart = createSelector(
    selectCartState,
    (state) => {
        return state.data
    }
);