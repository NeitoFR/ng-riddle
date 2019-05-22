import { Component, OnInit } from '@angular/core';
import { RiddleService } from './services/riddle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit  {
  title = 'ng-riddle';
  nickname: string;
  gameStarted: boolean;

  constructor(private riddleService: RiddleService){
    this.gameStarted = false;
  }
  ngOnInit() {
    this.riddleService.generateLevel().subscribe(res => {
      console.log(res);
    });
  }
  launchNewGame(values) {
    console.log(values);
  }
}
