import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CategoryService} from 'src/app/services/category.service';
import {ICategory} from '../../models/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html'
})
export class CategoryListComponent implements OnInit {

  categories: ICategory[] = []

  @Output()
  categoryId = new EventEmitter<string>();

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(response =>
      this.categories = response)
  }

  categoryChange(categoryId:string, i: number) {
      // @ts-ignore
    if(document.querySelectorAll('#categorybtn')[i].style.backgroundColor == "gray") {
      // @ts-ignore
      document.querySelectorAll('#categorybtn')[i].style.backgroundColor = "white"
    }
    else{
      // @ts-ignore
      document.querySelectorAll('#categorybtn').forEach(c => c.style.backgroundColor = "white")
      // @ts-ignore
      document.querySelectorAll('#categorybtn')[i].style.backgroundColor = "gray"
    }

    this.categoryId.emit(categoryId)
  }
}
