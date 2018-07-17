import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Product } from './product';

import { ProductService } from '../service/product.service';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';

import { flyInOut } from '../animations';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut()
  ]
})

export class ProductsComponent implements OnInit {

  products: Product[];

  constructor( private productService: ProductService,
               public dialog: MatDialog) {
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      products => this.products = products
    );
  }


  showDetails(prod: Product) {
      this.dialog.open( ProductDialogComponent, {
        width: '150vh',
        data: {
          title: prod.name,
          desc: prod.description,
          obj: prod.objectifs
        }
      });
  }

}
