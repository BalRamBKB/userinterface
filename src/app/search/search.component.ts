import { Component, OnInit } from '@angular/core';
import { Api2Service } from '../shared/api2.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  products:any;
  constructor(private apiService: Api2Service) { }

  ngOnInit() {
    this.apiService.getproducts().subscribe((data)=>{
      console.log('hello' + data);
      this.products = data;
    });
  }

}
