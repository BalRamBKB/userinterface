import { Component, OnInit } from '@angular/core';

@Component({
   // Tag selector Down
  selector: 'app-servers',
  // selector: '[app-servers]', 
  // attribute selector Up
    // class selector Down
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  
  allowServer = false;
  serverCreationStatus = 'No server was created';
  serverCreated = false;
  serverName = 'Server';
  servers = ['aaa', 'bbb', 'ccc'];
  usrName = '';
  
  constructor() { 
    setTimeout(() => {
      this.allowServer = true;
     }, 3000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was creatd Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  resetUseraName() {
    this.usrName ='';
  }

}
