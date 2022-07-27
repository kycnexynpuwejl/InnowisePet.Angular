import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CategoryService} from 'src/app/services/category.service';
import {ICategory} from '../../models/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html'
})
export class CategoryListComponent implements OnInit {

  categories: ICategory[] = []

  internalCategoryId = ''

  @Output()
  categoryId = new EventEmitter<string>();

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(response =>
      this.categories = response)
  }

  categoryChange(categoryId:string) {
    this.internalCategoryId = categoryId
    console.log(this.internalCategoryId)
    this.categoryId.emit(this.internalCategoryId)
  }
}
