import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {IProduct} from '../../models/product.model';
import {ActivatedRoute} from '@angular/router';
import {PageEvent} from "@angular/material/paginator";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})


export class ProductListComponent implements OnInit, OnChanges {

  products: IProduct[] = []
  productCount: number

  @Input() filter = false

  @Input() pageSize = 6

  @Input() pageNumber = 1

  @Input() search = ""

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) {
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit() {

    if (!this.filter) {
      this.productService.getProducts(this.pageSize, this.pageNumber, this.search)
        .subscribe(response => {

          this.products = response.paginatedProducts
          this.productCount = response.productCount

          for (let i = 0; i < this.products.length; i++) {
            this.products[i].imageUrl = "/assets/images/" + this.products[i].imageUrl
          }

        });
    } else {
      this.productService.getProductsByCategoryId(this.route.snapshot.params['id'])
        .subscribe(response => {

          this.products = response


          for (let i = 0; i < this.products.length; i++) {
            this.products[i].imageUrl = "/assets/images/" + this.products[i].imageUrl
          }
        })
    }
  }
}
