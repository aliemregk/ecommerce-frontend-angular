import { OrderProduct } from '../types/order-products.type';
import { OrderStatus } from '../enums/order-status.enum';
import { User } from './user.model';

export interface AddOrderRequest {
    id: number;
    orderDate: Date;
    totalPrice: number;
    user: User;
    status: OrderStatus;
    deliveryDate: Date;
    orderProducts: OrderProduct;
}
