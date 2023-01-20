import { Order } from './order.model';
import { Product } from './product.model';

export interface OrderDetail {
    id: number;
    product: Product;
    order: Order;
    quantity: number;
}