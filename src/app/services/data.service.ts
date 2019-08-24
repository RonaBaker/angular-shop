import { Injectable } from '@angular/core';
import products from '../../assets/data/products.json';
import categories from '../../assets/data/categories.json';
import { Product } from '../model/product';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  productsArray: Product[] = products;
  categoriesArray: Category[] = categories;
  constructor() { }

  getProducts(): Product[] { return this.productsArray; }

  getCategories(): Category[] { 
    return this.categoriesArray; 
  }

  addProduct(product: Product) {
    let productIndex = this.productsArray.findIndex(p => p.title === product.title);
    if (productIndex === -1) { // New product
      this.productsArray.push(product);
      return true;
    }
    this.productsArray[productIndex] = product; // Edit existing product
    return false;
  }

  getCatogory(categoryId: string) {
    return this.categoriesArray.find(category => category.id === categoryId)
  }
}
