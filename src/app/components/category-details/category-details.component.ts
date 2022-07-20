import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductList } from '../product-list/product-list.model';
import { CategoryDetails } from './category-details.model';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  category!: CategoryDetails
  products!: Array<ProductList>
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
