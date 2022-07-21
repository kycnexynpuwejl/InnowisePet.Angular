import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import {IProduct} from "../../models/product.model";
import {ICategory} from "../../models/category.model";

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  category!: ICategory
  products!: Array<IProduct>
  constructor(private categoryService: CategoryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.categoryService
    .getCategoryById(this.route.snapshot.params['id'])
    .subscribe(response =>
      {
        this.category = response
    })
  }

}
