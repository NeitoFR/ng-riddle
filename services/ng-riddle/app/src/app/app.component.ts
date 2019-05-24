import { Component, OnInit, Inject } from '@angular/core';
import { RiddleService } from './services/riddle.service';
import { ILevel } from './interfaces/level.model';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IScore } from './interfaces/score.model';

@Component({
  selector: 'app-score-component',
  templateUrl: './components/dialog/score-component.html',
})
export class ScoreDialogComponent {

  constructor(public scoreDialRef: MatDialogRef<ScoreDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: IScore) { }


}
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

  constructor(private riddleService: RiddleService, public dialog: MatDialog) {
    this.gameStarted = false;
  }
  difficultyChanged(str: string) {
    console.log('Difficulty changed', str);
    this.selectedDifficulty = str;
  }


  launchNewGame(values) {
    this.nickname = values.nickname;
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
    console.log('Game has ended', evt);
    this.gameStarted = false;
    this.currentGame = [];
    this.dialog.open(ScoreDialogComponent, { width: '300px', data: evt });
    this.selectedDifficulty = '2';
  }
}
