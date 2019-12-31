import { Component, OnInit } from '@angular/core';
import { Model } from '../shared/model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  selectedProduct : Model;
  constructor() { }

  ngOnInit() {
  }

}
