import { Injectable } from '@angular/core';

import { Product } from '../products/product';
import { PRODUCTS} from '../products/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return PRODUCTS;
}
}
