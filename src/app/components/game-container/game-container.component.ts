import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.scss']
})
export class GameContainerComponent implements OnInit {
  _currentGame: any[];

  @Input()
  set currentGame(currentGame: any[]) {
    console.log('Current Game Chagned', currentGame);
    this._currentGame = currentGame;
  };

  constructor() { }

  ngOnInit() {
  }
  log() {
    console.log(this._currentGame);

  }
}
