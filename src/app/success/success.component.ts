import { Component } from '@angular/core';

@Component({
    selector: 'app-success',
    templateUrl: './success.component.html',
    styleUrls: ['./success.component.css']
})

export class SuccessComponent {
    msg: string = 'Registration Completed';
    astri = '*';
    astri1 = 1;
    showText = false;
    logs = [];
    myLogs = [];

    onToggleDetails() {
        this.showText = !this.showText;
        // this.logs.push(this.logs.length + 1);
        this.logs.push(new Date());
        this.myLogs.push(this.astri);
        console.log(this.astri);
        console.log( 'myyy' + "*".repeat(this.astri1));
        this.astri += "*";
        this.astri1 ++;
    }

 }