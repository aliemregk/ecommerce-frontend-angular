import { Product } from './../entities/product.model';

export interface CartItem {
    product: Product;
    quantity: number;
}