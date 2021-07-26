import { Expression, Money, Sum } from './internal';

export class Bank {
  constructor() { }

  reduce(source: Expression, to: string): Money {
    const sum: Sum = <Sum>source;
    
    return sum.reduce(to);
  }
}