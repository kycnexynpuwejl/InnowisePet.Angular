import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute} from '@angular/router';
import {IProduct} from "../../models/product.model";
import {ProductStorageService} from "../../services/product-storage.service";
import {IProductStorage} from "../../models/product-storage.model";

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

  product!: IProduct
  productStorages!: IProductStorage[]
  productCount = 0

  constructor(private productService: ProductService,
              private productStorageService: ProductStorageService,
              private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.productService
      .getProductById(this.route.snapshot.params['id'])
      .subscribe(response => {
        this.product = response
        this.product.imageUrl = "/assets/images/" + this.product.imageUrl;
      });

    this.productStorageService
      .getProductStorages(this.route.snapshot.params['id'])
      .subscribe(response => {

        this.productStorages = response;

        this.productStorages.forEach(ps => {
          this.productCount = this.productCount + ps.quantity
        })
      })
  }
}


