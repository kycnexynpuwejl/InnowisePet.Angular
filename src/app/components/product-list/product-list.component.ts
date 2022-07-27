import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {IProduct} from '../../models/product.model';
import {FilterModel} from "../../models/filter.model";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})


export class ProductListComponent implements OnInit {

  products: IProduct[] = []

  @Input() filter: FilterModel;

  @Output() productCount = new EventEmitter<number>();


  constructor(private productService: ProductService) {
  }

  ngOnInit() {

    this.productService.getProducts(this.filter)
      .subscribe(response => {

        this.products = response.paginatedProducts
        this.productCount.emit(response.productCount)

        for (let i = 0; i < this.products.length; i++) {
          this.products[i].imageUrl = "/assets/images/" + this.products[i].imageUrl
        }
      });
  }

}
