import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Model } from '../../shared/model';

@Component({
  selector: 'app-color-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ColorDescriptionComponent implements OnInit {

  constructor() { }

  @Input() colorPDP : string;

  ngOnInit() {
  }

  // @HostListener('document:scroll', ['$event'])
  // scroll(event) {
  //   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
  //     document.getElementById("img").style.height = "150px";
  //     document.getElementById("pdp").style.position = 'fixed';

  //   } else {
  //     document.getElementById("img").style.height = "auto";
  //   }
  // }

}
