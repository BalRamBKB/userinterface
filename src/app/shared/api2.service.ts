import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Api2Service {
  searchText;
  constructor(private httpClient: HttpClient) { }
  public getproducts(){
    // return this.httpClient.get(`https://www.metaweather.com/api/location/search/?query=san`);
    return this.httpClient.get(`http://jsonplaceholder.typicode.com/users`);
    // return this.httpClient.get(`https://api.myjson.com/bins/qzuzi`);


  }
}