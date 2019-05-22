import { IAnswer } from './answer.model';

export interface ILevel {
  good_answer: string;
  answers: IAnswer[];
}
