import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.scss']
})
export class StopWatchComponent implements OnInit {


  interval;
  minute = 0;
  second = 0;
  millisecond = 0;
  start = false;
  pause = false;


  x = 1;

  constructor() { }

  startTimer() {
    this.x = 1;
    this.start = true;
    this.interval = setInterval(() => {
      this.updateTime();
    }, 100);

  }

  updateTime() {
    this.millisecond += this.x;

    if (this.millisecond > 9) {
      this.millisecond = 0;
      this.second++;
    }

    if (this.second > 59) {
      this.second = 0;
      this.minute++;
    }

    if (this.minute > 59) {
      this.minute = 0;
    }
  }
  reset() {
    this.x = 0;
    this.minute = this.second = this.millisecond = 0;
    this.start = false;
    this.pause = false;
    clearInterval(this.interval);
  }
  getTime(): string {

    return this.minute + ':' + this.second + ':' + this.millisecond;
  }
  ngOnInit() {
  }

}
