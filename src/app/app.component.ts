import { Component, OnInit } from '@angular/core';
import { RiddleService } from './services/riddle.service';
import { ILevel } from './interfaces/level.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'ng-riddle';
  nickname: string;
  gameStarted: boolean;
  currentGame: ILevel[];
  selectedDifficulty: string;

  constructor(private riddleService: RiddleService) {
    this.gameStarted = false;
  }
  difficultyChanged(str: string) {
    console.log('Difficulty changed', str);
    this.selectedDifficulty = str;
  }


  launchNewGame(values) {
    let options = {};
    switch (this.selectedDifficulty) {
      case '1':
        options = {
          number_of_game: '5',
          answer_by_game: '4'
        };
        break;
      case '2':
        options = {
          number_of_game: '8',
          answer_by_game: '5'
        };
        break;
      case '3':
        options = {
          number_of_game: '11',
          answer_by_game: '6'
        };
        break;
      default:
        break;
    }
    console.log('options :', options);

    this.riddleService.generateLevel(options).subscribe(res => {
      this.gameStarted = true;
      this.currentGame = res;
    });
  }

  stopGame(evt) {
    console.log('stopping game');
    this.gameStarted = false;
    this.currentGame = [];
  }
  ngOnInit() {
    this.selectedDifficulty = '2';
  }
  endGame(evt) {
    console.log('Game has ended');
    this.gameStarted = false;
    this.currentGame = [];
  }
}
