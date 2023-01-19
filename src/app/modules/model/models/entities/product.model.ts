import { Category } from './category.model';
export interface Product {
    id: number,
    name: string,
    description: string,
    stock: number,
    unitPrice: number,
    discount: number,
    category: Category
}