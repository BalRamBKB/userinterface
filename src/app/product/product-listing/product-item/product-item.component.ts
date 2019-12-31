import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { ApiService } from '../../../shared/api.service';
import { Model } from '../../../shared/model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem : Model;

  @Output() productSelected = new EventEmitter<void>();

  constructor() { }


  ngOnInit() {
    // this.apiService.getproducts().subscribe((data)=>{
    //   console.log('hello' + data);
    //   this.products = data;
    // });
  }


  onSelected() {
    this.productSelected.emit();
  }

}
