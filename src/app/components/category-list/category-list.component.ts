import {Component, ElementRef, EventEmitter, OnInit, Output, QueryList, ViewChild, ViewChildren} from '@angular/core';
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

  @ViewChildren('categorybtn') buttons: QueryList<any>

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(response =>
      this.categories = response)
  }

  categoryChange(categoryId: string, i: number) {

    if(this.buttons.get(i).nativeElement.style.backgroundColor == "gray") {
      this.buttons.get(i).nativeElement.style.backgroundColor = "white"
    }
    else{
      this.buttons.forEach(b => b.nativeElement.style.backgroundColor = "white")
      this.buttons.get(i).nativeElement.style.backgroundColor = "gray"
    }

    this.categoryId.emit(categoryId)
  }
}
