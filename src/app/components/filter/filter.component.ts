import {Component, Input, OnInit, Output} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {IProduct} from "../../models/product.model";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html'
})
export class FilterComponent implements OnInit {

  products: IProduct[] = []
  productCount: number

  @Input() filter = false

  @Input() @Output() pageSize = 6

  @Input() @Output() pageNumber = 1

  @Input() @Output() search = ''

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) {
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

      this.productService.getProductsByCategoryId(this.route.snapshot.params['id'], this.pageSize, this.pageNumber, this.search)
        .subscribe(response => {

          this.products = response.paginatedProducts
          this.productCount = response.productCount

          for (let i = 0; i < this.products.length; i++) {
            this.products[i].imageUrl = "/assets/images/" + this.products[i].imageUrl
          }
        })
    }
  }

  pageOnChange($event: PageEvent) {

    this.pageEvent = $event
    this.pageSize = this.pageEvent.pageSize
    this.pageNumber = this.pageEvent.pageIndex

    if (!this.filter) {
      this.productService.getProducts(this.pageSize, this.pageNumber + 1, this.search)
        .subscribe(response => {

          this.products = response.paginatedProducts
          this.productCount = response.productCount

          for (let i = 0; i < this.products.length; i++) {
            this.products[i].imageUrl = "/assets/images/" + this.products[i].imageUrl
          }

        });

    } else {

      this.productService.getProductsByCategoryId(this.route.snapshot.params['id'], this.pageEvent.pageSize, this.pageEvent.pageIndex + 1, this.search)
        .subscribe(response => {

          this.products = response.paginatedProducts
          this.productCount = response.productCount


          for (let i = 0; i < this.products.length; i++) {
            this.products[i].imageUrl = "/assets/images/" + this.products[i].imageUrl
          }
        })
    }

  }



  filterChange($event: KeyboardEvent) {

    if($event.keyCode == 13)
    {
      if (!this.filter) {

        this.productService.getProducts(this.pageSize, 1, this.search)
          .subscribe(response => {

            this.products = response.paginatedProducts
            this.productCount = response.productCount

            for (let i = 0; i < this.products.length; i++) {
              this.products[i].imageUrl = "/assets/images/" + this.products[i].imageUrl
            }

          })

      } else {

        this.productService.getProductsByCategoryId(this.route.snapshot.params['id'], this.pageSize, 1, this.search)
          .subscribe(response => {

            this.products = response.paginatedProducts
            this.productCount = response.productCount


            for (let i = 0; i < this.products.length; i++) {
              this.products[i].imageUrl = "/assets/images/" + this.products[i].imageUrl
            }
          })
      }
    }
  }
}
