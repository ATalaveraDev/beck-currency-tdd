import { Expression, Money, Sum } from './internal';

export class Bank {
  constructor() { }

  reduce(source: Expression, to: string): Money {    
    return source.reduce(to);
  }
}