import { User } from './user.model';

export interface Order {
    id: number;
    orderDate: Date;
    delivered: boolean;
    deliveryDate: Date;
    totalPrice: number;
    user: User;
}