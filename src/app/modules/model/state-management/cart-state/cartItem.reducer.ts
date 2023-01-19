import { initialState, CartState } from './cartItem.state';
import { ADD_CART_ITEM, REMOVE_CART_ITEM, UPDATE_CART_ITEM, CLEAR_CART } from './cartItem.action';
import { CartItem } from './../../models/cart/cartItem.model';
import { createReducer, on } from '@ngrx/store';

export const cartReducer = createReducer(
    initialState,
    on(
        ADD_CART_ITEM,
        (state: CartState<CartItem>, cartItem: CartItem) => ({ data: [...state.data, cartItem] }),
    ),
    on(
        REMOVE_CART_ITEM,
        (state: CartState<CartItem>, cartItem: CartItem) => {
            const indexToRemove = findIndexOfElement(cartItem, state.data);
            const newState: CartState<CartItem> = {
                data: [...state.data]
            }
            newState.data.splice(indexToRemove, 1);
            return newState;
        },
    ),
    on(
        UPDATE_CART_ITEM,
        (state: CartState<CartItem>, cartItem: CartItem) => {
            const indexToUpdate = findIndexOfElement(cartItem, state.data);
            const newState: CartState<CartItem> = {
                data: [...state.data]
            }
            newState.data.splice(indexToUpdate, 1, cartItem);
            return newState;
        },
    ),
    on(
        CLEAR_CART,
        () => ({ data: [...initialState.data] })
    )
);

function findIndexOfElement(element: CartItem, data: CartItem[]): number {
    const cartItemToRemove = data.find(item => item.product === element.product);
    return data.indexOf(cartItemToRemove as CartItem);
}
