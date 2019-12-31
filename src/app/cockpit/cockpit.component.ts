import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css']
})

export class CockpitComponent {
    
    @Output() serverCreated = new EventEmitter<{serverName: string, servercontent:string}>();
    @Output() blueprintCreated = new EventEmitter<{serverName: string, servercontent:string}>();

    newServerName = '';
    newServerContent = '';

    constructor(){}

    ngOnInit() {

    }

    // onAddServer() {
    //     this.serverCreated.emit({
    //         serverName: this.newServerName,
    //         servercontent: this.newServerContent
    //     });
    // }

    // Using Refrence
    onAddServer(nameInput:HTMLInputElement) {
        console.log(nameInput);
        console.log(nameInput.value);
        this.serverCreated.emit({
            // serverName: this.newServerName,
            serverName: nameInput.value,
            servercontent: this.newServerContent
        });
    }

    onAddBlueprint() {
        this.blueprintCreated.emit({
            serverName: this.newServerName,
            servercontent: this.newServerContent
        });
    }

}