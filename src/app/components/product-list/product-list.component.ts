import {Component, EventEmitter, Input, OnInit, Output, DoCheck, SimpleChanges, OnChanges} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {IProduct} from '../../models/product.model';
import {FilterModel} from "../../models/filter.model";
import {MatDialog} from "@angular/material/dialog";
import {ProductDetailsComponent} from "../product-details/product-details.component";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})


export class ProductListComponent implements OnChanges{

  products: IProduct[] = []

  @Input() filter: FilterModel = {};

  @Output() productCount = new EventEmitter<number>();


  constructor(private productService: ProductService,
              private dialog: MatDialog) { }

  loadProducts(): any{
    this.productService.getProducts(this.filter)
      .subscribe(response => {

        this.products = response.paginatedProducts
        this.productCount.emit(response.productCount)

        for (let i = 0; i < this.products.length; i++) {
          this.products[i].imageUrl = "/assets/images/" + this.products[i].imageUrl
        }
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.filter){
      this.loadProducts()
    }
  }

  openProductDetails(id: string) {
    this.dialog.open(ProductDetailsComponent, {
      data: {
        id: id
      }
    })
  }
}
