import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ProductList } from './product-list.model';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})


export class ProductListComponent implements OnInit {

  products: ProductList[] = [];

  constructor(private productService: ProductService) { }
  
  ngOnInit() {
    this.productService.getProducts().subscribe(response => {
      this.products = response.concat(response).concat(response);
    });
  }

}
