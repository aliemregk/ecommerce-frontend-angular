import { OrderStatus } from './../enums/order-status';
import { User } from './user.model';

export interface Order {
    id: number;
    orderDate: Date;
    status: OrderStatus;
    deliveryDate: Date;
    totalPrice: number;
    user: User;
}