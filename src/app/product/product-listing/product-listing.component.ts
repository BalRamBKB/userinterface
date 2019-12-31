import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Model } from '../../shared/model';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

  @Output() productWasSelected = new EventEmitter<Model>();

  products;

  constructor(private apiService: ApiService) { }


  ngOnInit() {
    this.apiService.getproducts().subscribe((data)=>{
      console.log('hello' + data);
      this.products = data;
    });
  }

  onproductSelected(productss: Model) {
    this.productWasSelected.emit(productss);
  }

}
