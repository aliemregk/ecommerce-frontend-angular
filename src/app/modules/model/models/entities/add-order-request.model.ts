import { User } from './user.model';

export interface AddOrderRequest {
    id: number;
    orderDate: Date;
    delivered: boolean;
    deliveryDate: Date;
    totalPrice: number;
    user: User;
    orderProducts: Map<number, number>
}
