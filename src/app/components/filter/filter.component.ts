import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {FilterModel} from "../../models/filter.model";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html'
})
export class FilterComponent implements OnInit {

  @Output()
  filter = new EventEmitter<FilterModel>();

  @Input()
  productCount: number;

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

  filterChange() {
    this.filter.emit(this.internalFilter);
  }
}
