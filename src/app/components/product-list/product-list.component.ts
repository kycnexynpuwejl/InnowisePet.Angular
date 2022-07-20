import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CategoryDetails } from '../category-details/category-details.model';
import { ProductList } from './product-list.model';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})


export class ProductListComponent implements OnInit {

  @Input()
  filter!: CategoryDetails

  products: ProductList[] = []

  constructor(private productService: ProductService) { }
  
  ngOnInit() {
    this.productService.getProducts().subscribe(response => {
      this.products = response.concat(response).concat(response);
    });
  }

}
