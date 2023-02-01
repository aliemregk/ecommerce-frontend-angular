import { User } from '../entities/user.model';

export interface AuthResponse {
    token: string;
    user: User;
}