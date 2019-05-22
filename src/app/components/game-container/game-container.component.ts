import { Component, OnInit, Input } from '@angular/core';
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

  @Input()
  set currentGame(currentGame: ILevel[]) {
    console.log('Current Game Chagned', currentGame);
    this._currentGame = currentGame;
    this._initGame();
  }

  _initGame() {
    console.log('Initializing Game, first level is : ', this._currentGame[0]);

    this.currentLevel = this._currentGame[0];
    this._goodAnswer = this.currentLevel.good_answer;
    this._answers = this.currentLevel.answers;
  }
  answerSelected(answer: IAnswer) {
    console.log('From game container, answer selected : ', answer.solution);

  }
  constructor() { }

  ngOnInit() {
  }
  log() {
    console.log(this._currentGame);

  }
}
