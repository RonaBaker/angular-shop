import { Product } from './product';

export interface Payment { 
    product: Product,
    quantity: number
}