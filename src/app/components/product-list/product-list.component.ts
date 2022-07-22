import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})


export class ProductListComponent implements OnInit {

  products: IProduct[] = []

  @Input()
  filter = false

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    if(!this.filter) {
      this.productService.getProducts()
      .subscribe(response => {

        this.products = response
  
        for(let i = 0; i < this.products.length; i++){
          this.products[i].imageUrl = "/assets/images/" + this.products[i].imageUrl
        }
      });
    }
    else {
      this.productService.getProductsByCategoryId(this.route.snapshot.params['id'])
      .subscribe(response => {

        this.products = response
  
        for(let i = 0; i < this.products.length; i++){
          this.products[i].imageUrl = "/assets/images/" + this.products[i].imageUrl
        }
      })
    }
  }
    

}
