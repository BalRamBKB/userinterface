import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  // @ViewChild("myDiv" , {static:true}) divView: ElementRef;

  dataSet = [150,60,110,140,80,100];
  width: 500;
  height: 300;

  constructor() { }

  ngOnInit() {
    // console.log("title:", this.divView.nativeElement.innerHTML);
  }

}
