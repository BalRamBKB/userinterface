import { Component, OnInit, Input } from '@angular/core';
import { Model2 } from '../../shared/model2'

@Component({
  selector: 'app-search-data',
  templateUrl: './search-data.component.html',
  styleUrls: ['./search-data.component.css']
})
export class SearchDataComponent implements OnInit {

  private _prodc : Model2[] = [];

  @Input() get userDatails(): Model2[] {
    return this._prodc;
  }

  set userDatails(value : Model2[]) {
    if(value) {
      this.filteredProducts = this._prodc = value;
    }
  }

  // @Input() element : {name: string}


  
  filteredProducts: any[] = [];
  currencyCode: string = 'INR';
  constructor() { }

  ngOnInit() {
    // this.apiService.getproducts().subscribe((data)=>{
    //   console.log('hello' + data);
    //   this.products = data;
    // });
  }

  filter(data: string) {
    if (data) {
        this.filteredProducts = this.userDatails.filter((user: Model2) => {
            return  user.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
            user.username.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
            user.email.toLowerCase().indexOf(data.toLowerCase()) > -1 ;
        });
    } else {
        this.filteredProducts = this.userDatails;
    }
}

  sort(prop:string) {

  }

}
