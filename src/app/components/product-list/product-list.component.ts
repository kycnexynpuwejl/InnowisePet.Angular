import {Component, Input, OnInit, Output} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {IProduct} from '../../models/product.model';
import {ActivatedRoute} from '@angular/router';
import {PageEvent} from "@angular/material/paginator";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})


export class ProductListComponent implements OnInit {

  products: IProduct[] = []
  productCount: number

  @Input() @Output() filter = false

  @Input() @Output() pageSize = 6

  @Input() @Output() pageNumber = 1

  @Input() @Output() search = ""

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) {
  }

  /*ngOnChanges(changes: SimpleChanges): void {
    console.log(this.pageEvent)
    console.log(changes)
  }*/

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

    if (!this.filter) {
      this.productService.getProducts(this.pageEvent.pageSize, this.pageEvent.pageIndex + 1, this.search)
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
}
