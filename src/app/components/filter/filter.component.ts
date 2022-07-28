import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';

import {FilterModel} from "../../models/filter.model";
import {MatPaginator, PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html'
})
export class FilterComponent implements OnInit {

  @Output()
  filter = new EventEmitter<FilterModel>();

  @Input()
  productCount: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  internalFilter: FilterModel = {
    pageNumber: 1,
    search: '',
    pageSize: 6,
    categoryId: ''
  };


  constructor() {

  }

  ngOnInit() {
    this.filter.emit(this.internalFilter);
  }

  filterChange($event: KeyboardEvent) {
    if($event.keyCode == 13){
      this.internalFilter.pageNumber = 1
      this.filter.emit(this.internalFilter);
      this.paginator.firstPage();
    }
  }

  paginatorChange($event: PageEvent) {
    this.internalFilter.pageSize = $event.pageSize
    this.internalFilter.pageNumber = $event.pageIndex + 1
    this.filter.emit(this.internalFilter);
  }

  categoryChange($event: string) {
    if(this.internalFilter.categoryId == $event){
      this.internalFilter.categoryId = ''
    }
    else{
      this.internalFilter.categoryId = $event
    }
    this.internalFilter.pageNumber = 1
    this.paginator.firstPage();
    this.filter.emit(this.internalFilter)
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.productCount) {
      this.productCount = changes.productCount.currentValue
    }
  }
}
