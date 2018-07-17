import { Injectable } from '@angular/core';

import { Product } from '../products/product';
import { PRODUCTS } from '../products/products';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
}
}
