import { Component } from '@angular/core';


@Component({
   selector:'app-server',
   templateUrl:'./server.component.html'
})

export class ServerComponet {

    serverID : number = 11;
    serverStatus: string = 'Offline';

    constructor() {
       this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    }

    getStatus() {
      return this.serverStatus;
    }


    getColor() {
       return this.serverStatus === 'Online' ? 'green' : 'red';
    }

}