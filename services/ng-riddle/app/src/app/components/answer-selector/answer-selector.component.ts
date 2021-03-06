import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IAnswer } from 'src/app/interfaces/answer.model';

@Component({
  selector: 'app-answer-selector',
  templateUrl: './answer-selector.component.html',
  styleUrls: ['./answer-selector.component.scss']
})
export class AnswerSelectorComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  public _answers: IAnswer[];
  selectedAnswer: IAnswer;
  // tslint:disable-next-line: variable-name
  @Input()
// tslint:disable-next-line: variable-name
  _i: number;

  @Output()
  answerSelected = new EventEmitter<IAnswer>();

  @Input()
  set answers(answers: IAnswer[]) {
    console.log('The answers changed', answers);
    this.selectedAnswer = null;
    this._answers = answers;
  }

  submitAnswer(value) {
    this.answerSelected.emit(value.selectedAnswer);
  }

  constructor() { }

  ngOnInit() {
  }

}
