import { Component, OnInit, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // constructor() { }

  @Output() menuSelected = new EventEmitter<string>();
  
  constructor(private eRef: ElementRef) {
    // this.text = 'no clicks yet';
  }

  onSelect(menuss:string) {
    this.menuSelected.emit(menuss);
  }

  ngOnInit() {
  }

  openNav() {
    document.getElementById("mynav").style.width = "250px";
  }

  closeNav() {
    document.getElementById("mynav").style.width = "0";
  }

  // @HostListener('document:click', ['$event'])
  // clickout(event) {
  //   if(this.eRef.nativeElement.contains(event.target)) {
  //     // document.getElementById("mynav").style.width = "250px";
  //   } else {
  //     document.getElementById("mynav").style.width = "0";
  //   }
  // }

}
