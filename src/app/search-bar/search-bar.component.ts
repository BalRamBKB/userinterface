import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

 @Output() searchCreated = new EventEmitter<{serverName: string }>();

  searchValue = '';

  // @ViewChild('serverNameInput') serverNameInput : ElementRef;

  constructor() { }

  ngOnInit() {
  }

  // onSearch(searchInput: HTMLInputElement) {
  //   console.log(searchInput.value);
  //   this.searchCreated.emit({
  //     prodName: searchInput.value,
  //     ProdVal: searchInput.value      

  //   });
  // }

  onUpdateServerName(searchInput: HTMLInputElement) {
    console.log(event);
    // console.log(this.serverNameInput.nativeElement.value);
    console.log(searchInput.value);
    this.searchCreated.emit({
      serverName: searchInput.value,
      // serverName : this.searchInput.nativeElement.value,
    });
  }

}
