import { Component, OnInit } from '@angular/core';
import { RiddleService } from './services/riddle.service';
import { ILevel } from './interfaces/level.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit  {
  title = 'ng-riddle';
  nickname: string;
  gameStarted: boolean;
  currentGame: ILevel[];

  constructor(private riddleService: RiddleService) {
    this.gameStarted = false;
  }
  ngOnInit() {

  }
  launchNewGame(values) {
    this.riddleService.generateLevel().subscribe(res => {
      this.gameStarted = true;
      this.currentGame = res;
    });
  }

  stopGame(evt) {
    console.log('stopping game');
    this.gameStarted = false;
    this.currentGame = [];
  }
}
