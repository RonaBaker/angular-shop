import { Injectable } from '@angular/core';
import products from '../../assets/data/products.json';
import categories from '../../assets/data/categories.json';
import { Product } from '../model/product';
import { Category } from '../model/category';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap, take, filter, share } from 'rxjs/operators';
import { createOfflineCompileUrlResolver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _products = new BehaviorSubject<Product[]>([]);
  private products = this._products.asObservable();
  private _categories = new BehaviorSubject<Category[]>([]);
  private categories = this._categories.asObservable();
  private readonly baseUrl = '../../assets/data/';
  private readonly error = 'An Error Has Occurred';

  constructor(private http: HttpClient) {
    this.loadProducts();
    this.loadCategories();
  }

  private loadProducts() {
    this.http.get(this.attachUrl('products.json'))
      .pipe(
        map(json => json as Product[])
      )
      .toPromise()
      .catch(() => Promise.reject(this.error))
      .then(o => this._products.next(o));
  }

  private loadCategories() {
    this.http.get(this.attachUrl('/categories.json'))
      .pipe(
        map(json => json as Category[])
      )
      .toPromise()
      .then(o => this._categories.next(o))
      .catch(() => Promise.reject(this.error));
  }

  getProducts() {
    return this.products;
  }

  getCategories() {
    return this.categories;
  }

  getFilteredProducts(categoryId: string) {
    return this.products
      .pipe(
        map(o => o.filter(p => p.categoryId === categoryId))
      );
  }

  private attachUrl(url: string) {
    return `${this.baseUrl}${url}`;
  }

  getProduct(id: string) {
    return this.products
      .pipe(
        filter(o => o.length > 0), // return a valid value (ignore undefined when theres a valid value)
        map(o => o.find(p => p.id === id)),
        take(1) // Takes the first returned value
      )
      .toPromise()
      .catch(() => Promise.reject(this.error));
  }

  addProduct(product: Product) {
    let productIndex = this._products.value.findIndex(p => p.id === product.id);
    if (productIndex === -1) { // New product
      this._products.value.push(product);
    }
    else {
      this._products.value.splice(productIndex, 1, product); // Edit existing product
    }
    this._products.next(this._products.value);
    return false;
  }

  getCategory(id: string) {
    return this._categories
      .pipe(
        filter(o => o.length > 0),
        map(o => o.find(c => c.id === id)),
        take(1)
      )
      .toPromise()
      .catch(() => Promise.reject(this.error));
  }
}
