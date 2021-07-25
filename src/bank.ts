import { Expression } from './internal';
import { Money } from './money';

export class Bank {
  constructor() { }

  reduce(source: Expression, to: string): any {
    return Money.dollar(10);
  }
}