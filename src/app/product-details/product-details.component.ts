import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ProductDetails } from './product-details.model';

@Component({
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {

  product!: ProductDetails;

  constructor(private productService: ProductService, private route: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.productService
    .getProductById(this.route.snapshot.params['id'])
    .subscribe(response => this.product = response);
  }

}
