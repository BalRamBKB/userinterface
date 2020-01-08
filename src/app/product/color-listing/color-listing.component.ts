import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Model } from '../../shared/model';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-color-listing',
  templateUrl: './color-listing.component.html',
  styleUrls: ['./color-listing.component.css']
})
export class ColorListingComponent implements OnInit {

  @Output() colorWasSelected = new EventEmitter<string>();

  products;

  constructor() { }

  hyphenS: string = "-";

  colors = [
    { colorName: "red", numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { colorName: "green", numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { colorName: "blue", numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { colorName: "gray", numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { colorName: "yellow", numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { colorName: "teal", numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { colorName: "maroon", numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { colorName: "silver", numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }
  ];

  ngOnInit() {

  }

  onproductSelected(productss: string) {
    this.colorWasSelected.emit(productss);
  }

}
