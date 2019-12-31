import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  
  @Input() number: number;

  // numbers = [1,2,3,4,5,6,7,8,9];
  evenNumbers = [2,4,6,8,];
  oddNumbers = [1,3,5,7,];
  onlyOdd = false;
  constructor() { }

  ngOnInit() {
  }

  showOddNumber() {

  }

}
