import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import {IProduct} from "../../models/product.model";

@Component({
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {

  product!: IProduct;
  productCount!: number

  constructor(private productService: ProductService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.productService
    .getProductById(this.route.snapshot.params['id'])
    .subscribe(response => {
      this.product = response
      this.product.imageUrl = "/assets/images/" + this.product.imageUrl;
    });

    this.productService
      .getProductCountFromStorages(this.route.snapshot.params['id'])
      .subscribe(response => this.productCount = response)
  }

}
