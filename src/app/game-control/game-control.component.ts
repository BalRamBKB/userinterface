import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() intervalFired = new EventEmitter<number>();
  intervals;
  lastNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.intervals = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      // console.log(this.lastNumber);
      this.lastNumber ++;
    },1000);
  }

  onPauseGame() {
    clearInterval(this.intervals);
  }
}
