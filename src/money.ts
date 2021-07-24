import { Dollar, Franc } from './internal';

export abstract class Money {
  protected amount: number = 0;

  constructor() { }

  equals(object: Object): boolean {
    const money: Money = <Money>object;
    
    return this.amount === money.amount && money.constructor.name === this.constructor.name;
  }

  static dollar(amount: number): Money {
    return new Dollar(amount);
  }
  
  static franc(amount: number): Money {
    return new Franc(amount);
  }

  abstract times(multiplier: number): Money;
}