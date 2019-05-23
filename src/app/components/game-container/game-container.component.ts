import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ILevel } from 'src/app/interfaces/level.model';
import { IAnswer } from 'src/app/interfaces/answer.model';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.scss']
})
export class GameContainerComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  _currentGame: ILevel[];
  // tslint:disable-next-line: variable-name
  _goodAnswer: string;
  // tslint:disable-next-line: variable-name
  _answers: IAnswer[];
  // _currentLevel:
  currentLevel: ILevel;

  score: number;

  // tslint:disable-next-line: variable-name
  _i: number;

  @Output() endGameEvent = new EventEmitter();

  @Input()
  set currentGame(currentGame: ILevel[]) {
    console.log('Current Game Chagned', currentGame);
    this._currentGame = currentGame;
    this._initGame();
  }

  _initGame() {
    console.log('Initializing Game, first level is : ', this._currentGame[0]);
    this._i = 0;
    this.score = 0;
    this.currentLevel = this._currentGame[this._i];
    this._goodAnswer = this.currentLevel.good_answer;
    this._answers = this.currentLevel.answers;
  }
  answerSelected(answer: IAnswer) {
        // Check Score TODO
    if (answer.id === this.currentLevel.good_answer) {
      console.log('You get the good answer');
      this.score++;
    } else {
      console.log('You got the wrong answer');
    }

    this._setNextLevel(answer);
  }

  _setNextLevel(answer: IAnswer) {
    if (this._i !== (this._currentGame.length - 1)) {
      this._i++;
      this.currentLevel = this._currentGame[this._i];
      this._goodAnswer = this.currentLevel.good_answer;
      this._answers = this.currentLevel.answers;
    } else {
      this._endGame();
    }
  }

  _endGame() {
    console.log('Game has ended');
    this.endGameEvent.emit();
  }

  constructor() { }

  ngOnInit() { }

  log() {
    console.log(this._currentGame);
  }
}
