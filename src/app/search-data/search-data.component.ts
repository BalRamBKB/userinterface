import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../shared/api.service';
// import { Model } from '../shared/model';

@Component({
  selector: 'app-search-data',
  templateUrl: './search-data.component.html',
  styleUrls: ['./search-data.component.css']
})
export class SearchDataComponent implements OnInit {

  @Input() element : {name: string}
  
   products:any;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getproducts().subscribe((data)=>{
      console.log('hello' + data);
      this.products = data;
    });
  }

}
