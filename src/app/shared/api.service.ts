import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  searchText;
  constructor(private httpClient: HttpClient) { }
  public getproducts(){
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/photos`);
    // return this.httpClient.get(`https://api.myjson.com/bins/qzuzi`);

    // return this.httpClient.get(`https://gorest.co.in/public-api/photos?_format=json&access-token=AomAMtjWTEUAuo-cfYeMQRXEsRxCQXGA6zpc`);
    
    // https://gorest.co.in/public-api/photos?_format=json&access-token=AomAMtjWTEUAuo-cfYeMQRXEsRxCQXGA6zpc

  }
}