import {Component, Input, OnInit} from '@angular/core';
import {FilterModel} from "../../models/filter.model";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html'
})
export class HomepageComponent implements OnInit {

  public filter: FilterModel;
  public productCount: number;

  constructor() {

  }

  ngOnInit(): void {

  }

  filterChange($event: FilterModel) {
    this.filter = $event;
  }

  productCountChange($event: number) {
    this.productCount = $event;
  }
}
