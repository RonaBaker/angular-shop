import { Injectable } from '@angular/core';
import products from '../../assets/data/products.json';
import categories from '../../assets/data/categories.json';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getProducts(): Product[] {
     return products;
  }

  getCategories() { return categories }
}
