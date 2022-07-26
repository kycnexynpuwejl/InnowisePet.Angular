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

  internalFilter: FilterModel;

  constructor() {
  }

  ngOnInit() {
    this.internalFilter.pageSize = 6;
    this.internalFilter.pageNumber = 1;
    this.internalFilter.search = '';
  }

  filterChange() {
    this.filter.emit(this.internalFilter);
  }
}
