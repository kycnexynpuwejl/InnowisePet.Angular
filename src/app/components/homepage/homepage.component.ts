import {Component, OnInit, OnChanges, SimpleChanges, Input, Output} from '@angular/core';
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
    this.filter = Object.assign({}, this.filter);
    console.log('--------------------')
    console.log('PARENT FILTER')
    console.log(this.filter)
  }

  productCountChange($event: number) {
    this.productCount = $event;
  }

}
