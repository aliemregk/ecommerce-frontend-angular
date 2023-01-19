import { CartItem } from './../../models/cart/cartItem.model';

export interface CartState<CartItem> {
    data: CartItem[];
}

export const initialState: CartState<CartItem> = {
    data: Array<CartItem>()
}
