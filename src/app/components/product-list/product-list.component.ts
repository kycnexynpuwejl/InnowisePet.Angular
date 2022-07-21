import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../models/product.model';
import {ICategory} from "../../models/category.model";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})


export class ProductListComponent implements OnInit {

  @Input()
  filter!: ICategory

  products: IProduct[] = []

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(response => {
      this.products = response.concat(response).concat(response);
    });
  }

}
