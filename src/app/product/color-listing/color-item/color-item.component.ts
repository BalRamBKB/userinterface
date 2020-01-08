import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { ApiService } from '../../../shared/api.service';
import { Model } from '../../../shared/model';

@Component({
  selector: 'app-color-item',
  templateUrl: './color-item.component.html',
  styleUrls: ['./color-item.component.css']
})
export class ColorItemComponent implements OnInit {

  @Input() colorItem : Model;

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
