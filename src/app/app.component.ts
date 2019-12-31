import { Component, OnInit, Output } from '@angular/core';

import { Model } from './shared/model'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // template: `<app-servers>00</app-servers>
  // <app-servers>1</app-servers>
  // <app-servers>2</app-servers>
  // `,
  // styles:[`
  //   h1 {
  //     color:red;
  //   }
  // `]
})
export class AppComponent { 
  title = 'My Header';

  oddNumbers : number []  = [];
  evenNumbers: number [] = [];

  serverElemets = [{name: 'Hello' }]

  onServerAdded(serverData: {serverName: string}) {
    this.serverElemets.push({
      name : serverData.serverName
    });
    
  }

  constructor() {
    console.log('constructed called');
  }
  
  OnInit() {
    console.log('ngOnInti called');
  }

  menuValue = 'home';

  onNavigation(navigate:string) {
    this.menuValue = navigate;
  }

  
  onFiredIntervale(firedNumber:number) {
    // console.log(firedNumber)
    if(firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    }
    else {
      this.oddNumbers.push(firedNumber);
    }
  }

}
